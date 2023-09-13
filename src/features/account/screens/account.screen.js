import React from "react";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground blurRadius={2}>
      <Title>Let's Meal</Title>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          mode="contained"
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            mode="contained"
            icon="email"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
