import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { Image, Text, View } from "tamagui";
import { s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import OtpInput from "../../components/inputs/OtpInput";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Profile: undefined;
};
const OtpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const handleVerifyOtp = () => {
    if (otp.join("").length < 4) {
      showMessage({
        message: "Please enter the OTP code.",
        type: "danger",
      });
      return;
    }

    navigation.navigate("Profile");
  };
  return (
    <AppSafeView style={{ flex: 1, backgroundColor: AppColors.primary }}>
      <View
        style={{ flex: 1, alignItems: "center" }}
        marginTop={s(50)}
        gap={s(30)}
      >
        <Image
          source={require("../../assets/images/applogo.png")}
          height={s(150)}
          width={s(150)}
        />
        <View>
          <Text fontFamily="Poppins-SemiBold" fontSize={s(20)}>
            Verify your number
          </Text>
          <Text
            fontFamily="Poppins-SemiBold"
            fontSize={s(10)}
            textAlign="center"
          >
            We've sent a code to your phone
          </Text>
        </View>
        <OtpInput value={otp} onChangeText={setOtp} />
        <View>
          <ButtonSecondary
            btnText={"Verify"}
            onPress={handleVerifyOtp}
            style={{ padding: s(50) }}
          />
          <View alignItems="center" gap={s(5)} marginTop={s(20)}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text fontSize={s(12)} fontFamily="Poppins-SemiBold">
                {"Didn't receive code? "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  /* handle resend */
                }}
              >
                <Text fontFamily="Poppins-SemiBold" fontSize={s(14)}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
            <Text fontFamily="Poppins-SemiBold" fontSize={s(12)}>
              You can request a new code in 4 seconds
            </Text>
          </View>
        </View>
      </View>
    </AppSafeView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
