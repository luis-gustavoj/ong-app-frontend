import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  LoginUser: undefined;
  Menu: undefined;
  RegisterOng: undefined;
  RegisterUser: undefined;
  Ongs: undefined;
};

export type UserType = {
  username: string;
  userType: string;
};

export type OngType = {
  ongname: string;
  description: string;
  address: string;
  city: string;
  state: string;
  contactPhone: string;
  contactEmail: string;
  category: string;
  ongPP: string;
};

export type ScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">;
