import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../Screens/auths/SignIn";
import OtpScreen from "../Screens/auths/OtpScreen";
import Profile from "../Screens/auths/Profile";
import AboutYouScreen from "../Screens/auths/AboutYouScreen";
import RelationshipInfo from "../Screens/auths/RelationshipInfo";
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AboutYou" component={AboutYouScreen} />
      <Stack.Screen name="RelationshipScreen" component={RelationshipInfo} />
    </Stack.Navigator>
  );
};

export default AuthStack;
