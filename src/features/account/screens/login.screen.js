import React, { useContext, useEffect, useState } from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, isLoading, error, setError } = useContext(
    AuthenticationContext
  );

  useEffect(() => {
    setError([]);
  }, []);

  return (
    <AccountBackground blurRadius={2}>
      <Title>Let's Meal</Title>
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
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
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
      <Spacer size={"large"}>
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default LoginScreen;
