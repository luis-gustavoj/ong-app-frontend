import React, { useContext, useEffect, useState } from "react";

import {
  Container,
  TextContainer,
  Title,
  List,
  CardContainer,
  InfoContainer,
  UpperContainer,
  ButtonsContainer,
  EditButton,
  DeleteButton,
} from "./styles";

import { api } from "../../services/api";
import { Image, Text, Alert } from "react-native";

import { OngType, ScreenProps } from "../../../types";
import { AuthContext } from "../../contexts/AuthContext";

export default function Ongs({ navigation }: ScreenProps) {
  const [ongs, setOngs] = useState<OngType[]>([]);
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get("/ongs", {
          params: {
            owner: user?.id,
          },
        })
        .then((response) => {
          setOngs(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    fetchData();
  }, []);

  const handleEditOng = (editingOng: OngType) => {
    navigation.navigate("RegisterOng", { ong: editingOng });
  };

  const handleDeleteOng = async (ongId: string) => {
    Alert.alert(
      "Excluir ong?",
      "Você esta prestes a realizar a exclusão da ong, você confirma esta ação?",
      [
        { text: "Cancelar", style: "cancel", onPress: () => {} },
        {
          text: "Realizar exclusão",
          style: "destructive",
          onPress: async () =>
            await api
              .delete("/ongs", {
                data: {
                  ongID: ongId,
                },
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(async (response) => {
                await api
                  .get("/ongs", {
                    params: {
                      owner: user?.id,
                    },
                  })
                  .then((response) => {
                    setOngs(response.data);
                  })
                  .catch((error) => {
                    console.log(error.message);
                  });
              })
              .catch((error) => {
                console.log(error.message);
              }),
        },
      ]
    );
  };

  return (
    <Container>
      <TextContainer>
        <Title>Escolha uma ONG para realizar a doação</Title>
      </TextContainer>
      <List
        data={ongs}
        renderItem={({ item }) => {
          return (
            <CardContainer>
              <UpperContainer>
                <InfoContainer>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      marginBottom: 6,
                      borderBottomColor: "#e6e6e6",
                      borderBottomWidth: 1,
                    }}
                  >
                    {item.ongname}
                  </Text>
                  <Text style={{ fontSize: 16 }}>{item.contactPhone}</Text>
                  <Text style={{ fontSize: 16 }}>{item.address}</Text>
                </InfoContainer>
                <Image
                  source={{ uri: item.ongPP }}
                  style={{
                    width: 172,
                    height: "100%",
                    borderBottomRightRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
              </UpperContainer>
              <ButtonsContainer>
                <EditButton onPress={() => handleEditOng(item)}>
                  <Text style={{ fontSize: 16, color: "#FFF" }}>
                    Editar minha ong
                  </Text>
                </EditButton>
                <DeleteButton onPress={() => handleDeleteOng(item.id)}>
                  <Text style={{ fontSize: 16, color: "#B80F0A" }}>
                    Deletar ong
                  </Text>
                </DeleteButton>
              </ButtonsContainer>
            </CardContainer>
          );
        }}
      />
    </Container>
  );
}
