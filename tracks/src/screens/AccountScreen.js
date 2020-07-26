import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text style={{ fontSize: 48 }}>Account Screen</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: (
    <View style={{ paddingTop: 3 }}>
      <FontAwesome name="gear" size={30} />
    </View>
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "#5059B9",
    },
    labelStyle: {
      fontSize: 13,
      color: "white",
    },
  },
};

const styles = StyleSheet.create({});

export default AccountScreen;
