import React from "react";

import LottieView from "lottie-react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground blurRadius={2}>
      <Title>Let's Meal</Title>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key={"animation"}
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/animation-food.json")}
        />
      </AnimationWrapper>
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
