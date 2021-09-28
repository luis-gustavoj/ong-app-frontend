import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 24px 16px;
`;

export const TextContainer = styled.View`
  align-self: flex-start;
  width: 100%;
`;

export const Title = styled.Text`
  width: 80%;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SubText = styled.Text`
  font-size: 20px;
`;

export const InputsContainer = styled.View`
  align-self: flex-start;
  width: 100%;
  margin: auto 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  background-color: #f9f9f9;
  border-radius: 4px;
  padding: 0 8px;
  margin: 8px 0;
`;
