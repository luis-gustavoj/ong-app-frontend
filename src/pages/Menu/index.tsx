import React, { useContext, useEffect } from "react";
import { Alert, Image } from "react-native";

import { Button } from "../../components/Button";

import {
  ButtonsContainer,
  Container,
  TextContainer,
  SubText,
  Title,
} from "./styles";

import { ScreenProps } from "../../../types";
import { AuthContext } from "../../contexts/AuthContext";
import { CommonActions } from "@react-navigation/routers";

export default function Menu({ navigation }: ScreenProps) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();

      Alert.alert(
        "Realizar logout?",
        "Você esta prestes a realizar logout, você confirma esta ação?",
        [
          { text: "Cancelar", style: "cancel", onPress: () => {} },
          {
            text: "Realizar logout",
            style: "destructive",
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    });
  }, [navigation]);

  return (
    <Container>
      <TextContainer>
        <Title>Que bom que você está aqui {user?.username}! 😍</Title>
        <SubText>Agora você está prontinho para começar</SubText>
      </TextContainer>
      <Image
        source={require("../../assets/img/menuImage.png")}
        style={{ resizeMode: "contain", height: 360 }}
      />
      <ButtonsContainer>
        {user!.userType === "owner" ? (
          <Button
            text="Cadastrar uma ong"
            onPress={() => navigation.navigate("RegisterOng")}
          />
        ) : (
          <Button
            text="Realizar uma doação"
            onPress={() => navigation.navigate("Ongs")}
          />
        )}
      </ButtonsContainer>
    </Container>
  );
}
