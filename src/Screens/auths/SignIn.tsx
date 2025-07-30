// import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import { Text, Image, View } from "tamagui";
import AppLogo from "../../assets/Logos/AppLogo";
import AppTextInput from "../../components/inputs/AppTextInput";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  AboutYou: undefined;
  OtpScreen: undefined;
};
const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate("OtpScreen");
  };
  return (
    <AppSafeView style={{ flex: 1, backgroundColor: AppColors.primary }}>
      <View
        backgroundColor={AppColors.primary}
        flex={1}
        alignItems="center"
        // justifyContent="center"
        paddingHorizontal={s(20)}
        marginVertical={vs(30)}
      >
        <View alignItems="center">
          <Text fontSize={s(23)} fontFamily={"Poppins-Bold"} color={"#000"}>
            Welcome to okaBoka
          </Text>
          <Text fontSize={s(10)} fontFamily={"Poppins-Regular"} color={"#000"}>
            Connect with emotionally similar people
          </Text>
        </View>
        <View
          marginTop={vs(20)}
          marginBottom={vs(10)}
          alignItems="center"
          gap={s(10)}
        >
          <Image
            source={require("../../assets/images/applogo.png")}
            height={s(150)}
            width={s(150)}
          />
          <Text
            fontFamily={"Poppins-SemiBold"}
            fontSize={s(13)}
            color={"#000"}
            textAlign={"center"}
          >
            Let’s start with your number your world begins here.
          </Text>
        </View>
        <View gap={s(10)} marginTop={s(50)}>
          <AppTextInput
            inputText={"Phone Number"}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Text textAlign="center">Or</Text>
          <ButtonPrimary btnText={"Continue With Whatsapp"} />
          <ButtonSecondary btnText={"Send Me The Code"} onPress={handleLogin} />
          <Text
            fontFamily={"Poppins-Regular"}
            fontSize={s(11)}
            color={"#000"}
            textAlign={"center"}
          >
            We'll never share your number
          </Text>
        </View>
      </View>
    </AppSafeView>
  );
};

export default SignIn;
