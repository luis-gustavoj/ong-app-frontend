import React, { useContext, useEffect } from "react";
import { Alert, Image, Dimensions } from "react-native";

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

export default function Menu({ navigation }: ScreenProps) {
  const { height } = Dimensions.get('window');
  
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
        style={{resizeMode: 'contain',
    width: '60%',
    height: height / 3}}
      />
      <ButtonsContainer>
        {user!.userType === "owner" ? (
          <>
            <Button
              text="Cadastrar uma ong"
              onPress={() => navigation.navigate("RegisterOng")}
            />
            <Button
              text="Ver minhas ongs"
              onPress={() => navigation.navigate("OwnerOngs")}
            />
          </>
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
