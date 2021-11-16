import { FlatList } from "react-native";
import styled from "styled-components/native";

import { OngType } from "../../../types";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 24px 16px;
`;

export const TextContainer = styled.View`
  align-self: flex-start;
  width: 100%;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SubText = styled.Text`
  font-size: 24px;
`;

export const List = styled(FlatList as new () => FlatList<OngType>)`
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled.View`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  background-color: #e6e6e6;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const InfoContainer = styled.View`
  width: 70%;
  display: flex;
  align-items: flex-start;
  margin-right: auto;
`;
