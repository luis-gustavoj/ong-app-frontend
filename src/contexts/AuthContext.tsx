import React, { createContext, ReactNode, useState } from "react";

import { UserType } from "../../types";

type AuthContextType = {
  token: string;
  loginUser: (userToken: string, username: string, userType: string) => void;
  logoutUser: () => void;
  user: UserType | undefined;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<UserType>();

  const handleLogin = (
    userToken: string,
    username: string,
    userType: string
  ) => {
    const newUser = {
      username: username,
      userType: userType,
    };

    setUser(newUser);
    setToken(userToken);
  };

  const handleLogout = () => {
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        loginUser: handleLogin,
        logoutUser: handleLogout,
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
