import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";

import { api } from "../../services/api";

import { ScreenProps } from "../../../types";

import {
  Container,
  SubText,
  TextContainer,
  Title,
  InputsContainer,
  Input,
} from "./styles";

export default function LoginUser({ navigation }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener("focus", () => {
      setEmail("");
      setPassword("");
      logoutUser();
    });
  }, [navigation]);

  const handleLoginUser = async () => {
    const { data } = await api.post("/login", {
      email: email,
      password: password,
    });

    if (data) {
      const userToken = data.token;
      const username = data.user.username;
      const userType = data.user.usertype;

      loginUser(userToken, username, userType);
      navigation.navigate("Menu");
    }
  };

  return (
    <Container>
      <TextContainer>
        <Title>Então vamos fazer seu login!</Title>
        <SubText>É bem rapidinho, eu prometo!</SubText>
      </TextContainer>
      <InputsContainer>
        <Input
          placeholder="E-mail"
          placeholderTextColor="#060625"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="#060625"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button text="Login" onPress={() => handleLoginUser()} />
      </InputsContainer>
    </Container>
  );
}
