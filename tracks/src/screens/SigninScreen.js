import React, { useContext } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <ImageBackground
      source={require("../../../tracks/assets/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm
          headerText="Sign In"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign In"
        />
        <NavLink
          text="Don't have an account? Sign up instead"
          routeName="Signup"
        />
      </View>
    </ImageBackground>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
});

export default SignInScreen;
