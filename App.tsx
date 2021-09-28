import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "./src/pages/Menu";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import RegisterOng from "./src/pages/RegisterOng";
import RegisterUser from "./src/pages/RegisterUser";

import { RootStackParamList } from "./types";
import Ongs from "./src/pages/Ongs";
import LoginUser from "./src/pages/LoginUser";
import { AuthContextProvider } from "./src/contexts/AuthContext";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginUser" component={LoginUser} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="RegisterOng" component={RegisterOng} />
          <Stack.Screen name="RegisterUser" component={RegisterUser} />
          <Stack.Screen name="Ongs" component={Ongs} />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
