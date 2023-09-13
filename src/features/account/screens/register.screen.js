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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, isLoading, error, setError } = useContext(
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
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            mode="outlined"
            textContentType="repeatedPassword"
            secureTextEntry
            autoCapitalize="none"
            value={repeatedPassword}
            onChangeText={(value) => setRepeatedPassword(value)}
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
            icon="email"
            loading={isLoading}
            onPress={() => {
              onRegister(email, password, repeatedPassword);
            }}
          >
            Register
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

export default RegisterScreen;
