import { StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Text, View } from "tamagui";
import { s } from "react-native-size-matters";
import { media } from "@tamagui/config";
import { AppColors } from "../../styles/colors";
interface CustomBtnProps {
  btnText: string; // The text to display on the button
  style?: object; // Additional styles for the button
  selected?: boolean; // Whether the button is selected
  onPress: () => void; // Function to call when the button is pressed
}
const CustomBtn: FC<CustomBtnProps> = ({
  btnText,
  style,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        // padding={s(10)}
        borderRadius={s(8)}
        backgroundColor={selected ? AppColors.btnSecondary : "#ffffff"}
        alignItems="center"
        justifyContent="center"
        style={style}
      >
        <Text
          fontFamily={"Poppins-Regular"}
          fontSize={s(12)}
          color={selected ? "#ffffff" : "#000000"}
        >
          {btnText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
