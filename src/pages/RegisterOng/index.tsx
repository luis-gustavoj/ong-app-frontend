import React, { useContext, useEffect, useState } from "react";
import { RegisterScreenProps, ScreenProps } from "../../../types";
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

export default function RegisterOng({
  route,
  navigation,
}: RegisterScreenProps) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [place, setPlace] = useState("");
  const [id, setId] = useState("");

  const { token } = useContext(AuthContext);

  const handleSaveOng = async (isEditing = false) => {
    console.log(token);

    if (isEditing) {
      await api
        .put(
          "/ongs",
          {
            ongID: id,
            ongname: name,
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
    } else {
      await api
        .post(
          "/ongs",
          {
            ongname: name,
            description: "",
            address: place,
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
    }

    navigation.navigate("OwnerOngs");
  };

  useEffect(() => {
    console.log(route?.params?.ong);
    if (route?.params?.ong) {
      setImage(route.params.ong.ongPP);
      setName(route.params.ong.ongname);
      setTel(route.params.ong.contactPhone);
      setEmail(route.params.ong.contactEmail);
      setCategory(route.params.ong.category);
      setPlace(route.params.ong.address);
      setId(route.params.ong.id);
    }
  }, []);

  return (
    <Container>
      <TextContainer>
        <Title>
          {route?.params?.ong ? "Editar ONG" : "Então vamos cadastrar a ONG!"}
        </Title>
        <SubText>
          {route?.params?.ong
            ? "Edite o que achar necessário e salve"
            : "Então vamos cadastrar a ONG!"}
        </SubText>
      </TextContainer>
      <InputsContainer>
        <Input
          placeholder="Imagem da ONG (Cole o link aqui)"
          placeholderTextColor="#060625"
          value={image}
          onChangeText={setImage}
        />
        <Input
          placeholder="Nome da ong"
          placeholderTextColor="#060625"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Categoria"
          placeholderTextColor="#060625"
          value={category}
          onChangeText={setCategory}
        />
        <Input
          placeholder="Telefone"
          placeholderTextColor="#060625"
          value={tel}
          onChangeText={setTel}
        />
        <Input
          placeholder="E-mail"
          placeholderTextColor="#060625"
          onChangeText={setEmail}
        />
        <Input
          placeholder="Localização"
          placeholderTextColor="#060625"
          value={place}
          onChangeText={setPlace}
        />
      </InputsContainer>
      <Button
        text={route?.params?.ong ? "Salvar" : "Cadastrar Ong"}
        onPress={
          route?.params?.ong ? () => handleSaveOng(true) : () => handleSaveOng()
        }
      />
    </Container>
  );
}
