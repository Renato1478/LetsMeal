import React, { useContext, useState } from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground blurRadius={2}>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          mode="outlined"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            mode="outlined"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </Spacer>
        {error.length ? (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        ) : null}
        <Spacer size="large">
          <AuthButton
            mode="contained"
            icon="lock-open-outline"
            loading={isLoading}
            onPress={() => {
              onLogin(email, password);
            }}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default LoginScreen;
