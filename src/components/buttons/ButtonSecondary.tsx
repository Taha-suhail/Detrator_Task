import { StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Text, Image, View } from "tamagui";
import { s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
interface ButtonSecondaryProps {
  btnText?: string; // The text to display on the button
  onPress: () => void; // Function to call when the button is pressed
  style?: object; // Additional styles for the button
}
const ButtonSecondary: FC<ButtonSecondaryProps> = ({
  btnText,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
      <Text fontFamily={"Poppins-SemiBold"} fontSize={s(12)} color={"#fff"}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: s(80),
    // marginVertical: 10,
    paddingVertical: s(10),
    backgroundColor: AppColors.btnSecondary,
  },
});
