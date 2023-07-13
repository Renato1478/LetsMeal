import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  console.log("isAuthenticated", isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <AppNavigator />
  //   </NavigationContainer>
  // );
}

export default Navigation;
