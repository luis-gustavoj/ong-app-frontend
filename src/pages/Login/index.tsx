import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";

import { Button } from "../../components/Button";

import { ScreenProps } from "../../../types";

import { Container, Image, SubText, Title } from "./styles";

export default function Login({ navigation }: ScreenProps) {
  const { height } = Dimensions.get('window');

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  return (
    <Container>
      <View style={{ width: "100%" }}>
        <Image source={require("../../assets/img/homeImage.png")} style={{resizeMode: 'contain',
    width: '60%',
    height: height / 3}}/>
        <Title>O que você deseja fazer agora?</Title>
      </View>
      <View style={{ width: "100%" }}>
        <Button
          text="Já tenho uma conta!"
          onPress={() => navigation.navigate("LoginUser")}
        />
        <Button
          text="Quero me registrar!"
          onPress={() => navigation.navigate("RegisterUser")}
          onlyText={true}
        />
      </View>
    </Container>
  );
}
