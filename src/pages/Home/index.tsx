import React from "react";
import { View } from "react-native";

import { Button } from "../../components/Button";

import { ScreenProps } from "../../../types";

import { Container, Image, SubText, Title } from "./styles";

export default function Home({ navigation }: ScreenProps) {
  return (
    <Container>
      <View style={{ width: "100%" }}>
        <Image source={require("../../assets/img/homeImage.png")} />
        <Title>Nós estamos em uma missão para ajudar os necessitados!</Title>
        <SubText>
          Venha com a gente nessa batalha pelo próximo, cooperar com o próximo é
          um ato de amor!
        </SubText>
      </View>
      <View style={{ width: "100%" }}>
        <Button
          text="Mude o agora!"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </Container>
  );
}
