import React, { useEffect, useState } from "react";

import {
  Container,
  TextContainer,
  Title,
  List,
  CardContainer,
  InfoContainer,
} from "./styles";

import { api } from "../../services/api";
import { Image, Text } from "react-native";

import { OngType } from "../../../types";

export default function Ongs() {
  const [ongs, setOngs] = useState<OngType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get("/ongs")
        .then((response) => {
          setOngs(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    fetchData();
  }, []);

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
            </CardContainer>
          );
        }}
      />
    </Container>
  );
}
