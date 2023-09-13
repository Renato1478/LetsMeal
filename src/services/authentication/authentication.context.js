import React, { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./authentication.service";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  onAuthStateChanged(getAuth(), (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setUser(null);
      setIsLoading(false);
    }
  });

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
    setIsLoading(true);

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

  const onLogout = () => {
    signOut(getAuth());
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
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
