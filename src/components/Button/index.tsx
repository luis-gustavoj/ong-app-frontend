import React from "react";

import styled from "styled-components/native";

type ButtonWrapperProps = {
  isButtonOnlyText?: boolean;
};

const ButtonWrapper = styled.TouchableOpacity<ButtonWrapperProps>`
  align-items: center;
  margin-top: auto;
  background-color: ${(props) =>
    props.isButtonOnlyText ? "transparent" : "#38a1ff"};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  margin-top: 12px;
`;

const ButtonText = styled.Text<ButtonWrapperProps>`
  font-weight: 700;
  color: ${(props) => (props.isButtonOnlyText ? "#38a1ff" : "#FFF")};
  font-size: 16px;
`;

type ButtonProps = {
  text: string;
  onPress?: () => void;
  onlyText?: boolean;
};

export const Button = ({ text, onPress, onlyText = false }: ButtonProps) => {
  return (
    <ButtonWrapper onPress={onPress} isButtonOnlyText={onlyText}>
      <ButtonText isButtonOnlyText={onlyText}>{text}</ButtonText>
    </ButtonWrapper>
  );
};
