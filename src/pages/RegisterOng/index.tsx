import React, { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";

import { api } from "../../services/api";

import {
  Container,
  SubText,
  TextContainer,
  Title,
  InputsContainer,
  Input,
} from "./styles";

export default function RegisterOng() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [place, setPlace] = useState("");

  const { token } = useContext(AuthContext);

  const handleSaveOng = async () => {
    console.log(token);

    await api
      .post(
        "/ongs",
        {
          ongname: name,
          description: "",
          address: place,
          city: "",
          state: "",
          contactPhone: tel,
          contactEmail: email,
          category: category,
          ongPP: image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <TextContainer>
        <Title>Então vamos cadastrar a ONG!</Title>
        <SubText>Digite abaixo os dados necessários para o cadastro!</SubText>
      </TextContainer>
      <InputsContainer>
        <Input
          placeholder="Imagem da ONG (Cole o link aqui)"
          placeholderTextColor="#060625"
          onChangeText={(text) => setImage(text)}
        />
        <Input
          placeholder="Nome da ong"
          placeholderTextColor="#060625"
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Categoria"
          placeholderTextColor="#060625"
          onChangeText={(text) => setCategory(text)}
        />
        <Input
          placeholder="Telefone"
          placeholderTextColor="#060625"
          onChangeText={(text) => setTel(text)}
        />
        <Input
          placeholder="E-mail"
          placeholderTextColor="#060625"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Localização"
          placeholderTextColor="#060625"
          onChangeText={(text) => setPlace(text)}
        />
      </InputsContainer>
      <Button text="Cadastrar Ong" onPress={() => handleSaveOng()} />
    </Container>
  );
}
