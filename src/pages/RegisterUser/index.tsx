import React, { useState } from "react";
import { Alert } from "react-native";

import { ScreenProps } from "../../../types";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import {
  Container,
  SubText,
  TextContainer,
  Title,
  InputsContainer,
  Input,
  RadioButtonContainer,
  RadioButton,
  RadioButtonText,
} from "./styles";

export default function RegisterOng({ navigation }: ScreenProps) {
  const [userType, setUserType] = useState("standart");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisterUser = async () => {
    if (password != confirmPassword) {
      Alert.alert(
        "Aviso",
        "As senhas não conferem",
        [
          {
            text: "Ok",
            onPress: () => {},
            style: "cancel",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        }
      );
    } else if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Alert.alert(
        "Aviso",
        "Por favor, preencha todos os campos!",
        [
          {
            text: "Ok",
            onPress: () => {},
            style: "cancel",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        }
      );
    } else {
      await api
        .post("/users", {
          username: name + " " + lastName,
          email: email,
          password: password,
          usertype: userType,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.message);
        });

      navigation.navigate("Login");
    }
  };

  return (
    <Container>
      <TextContainer>
        <Title>Então você decidiu mudar o agora? 👏</Title>
        <SubText>
          Primeiramente vamos cadastrar seu usuário! é rapidinho, prometo
        </SubText>
      </TextContainer>
      <InputsContainer>
        <Input
          placeholder="Nome"
          placeholderTextColor="#060625"
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Sobrenome"
          placeholderTextColor="#060625"
          onChangeText={(text) => setLastName(text)}
        />
        <Input
          placeholder="E-mail"
          placeholderTextColor="#060625"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="#060625"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Input
          placeholder="Confirmar senha"
          placeholderTextColor="#060625"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <RadioButtonContainer>
          <RadioButton
            isActive={userType === "standart"}
            onPress={() => setUserType("standart")}
          >
            <RadioButtonText isActive={userType === "standart"}>
              Doar para uma ong
            </RadioButtonText>
          </RadioButton>
          <RadioButton
            isActive={userType === "owner"}
            onPress={() => setUserType("owner")}
          >
            <RadioButtonText isActive={userType === "owner"}>
              Cadastrar uma ong
            </RadioButtonText>
          </RadioButton>
        </RadioButtonContainer>
      </InputsContainer>
      <Button text="Registrar" onPress={() => handleRegisterUser()} />
    </Container>
  );
}
