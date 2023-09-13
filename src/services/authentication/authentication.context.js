import React, { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((error) => {
        // setError(error.toString());
        setError("Error! Check your e-mail and password...");
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error! Passwords do not match");
      return;
    }

    setIsLoading(true);
    registerRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((error) => {
        // setError(error.toString());
        setError("Error! Check your e-mail and password...");
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        setError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
