import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={{ color: "white" }}>
          {headerText}
        </Text>
      </Spacer>
      <Spacer />
      <Input
        inputContainerStyle={{
          borderColor: "white",
          borderRadius: 9,
          backgroundColor: "white",
          opacity: 0.3,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}
        label={<Text style={styles.label}>Email</Text>}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={
          <Icon style={styles.loginIcon} name="user" size={28} color="black" />
        }
      />

      <Input
        secureTextEntry
        inputContainerStyle={{
          borderColor: "white",
          borderRadius: 9,
          backgroundColor: "white",
          opacity: 0.3,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}
        label={<Text style={styles.label}>Password</Text>}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={
          <Icon style={styles.loginIcon} name="lock" size={28} color="black" />
        }
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          buttonStyle={{ borderColor: "white", borderWidth: 0.5 }}
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginLeft: 20,
  },
  loginIcon: {
    marginLeft: 10,
    paddingRight: 5,
  },
});

export default AuthForm;
