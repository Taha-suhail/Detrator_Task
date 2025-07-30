import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, Image, View } from "tamagui";
import { s } from "react-native-size-matters";
const ButtonPrimary = ({ btnText }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text fontFamily={"Poppins-Regular"} fontSize={s(12)}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 10,
  },
});
