import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AppColors } from "../styles/colors";
import { Text, View } from "tamagui";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
const Feelings = () => {
  return (
    <View
      backgroundColor={AppColors.primary}
      paddingHorizontal={20}
      paddingVertical={vs(6)}
    >
      <Text
        textAlign="center"
        fontFamily="Poppins-Bold"
        fontSize={s(14)}
        marginTop={s(5)}
      >
        How I’m Feeling Right Now
      </Text>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <View>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View alignItems="center">
          <Text fontSize={s(30)}>☹️</Text>
          <Text fontSize={s(8)} fontFamily="Poppins-SemiBold">
            Sad
          </Text>
          <View flexDirection="row" alignItems="center">
            <Ionicons name="people" size={12} color="black" />
            <Text fontSize={s(10)}>1.5K</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View flexDirection="row" justifyContent="space-between">
        <View alignItems="center">
          <Text fontSize={s(20)}>😀</Text>
          <Text fontSize={s(10)} fontFamily="Poppins-SemiBold">
            Happy
          </Text>
        </View>
        <View alignItems="center">
          <Text fontSize={s(20)}>😘</Text>
          <Text fontSize={s(10)} fontFamily="Poppins-SemiBold">
            Romantic
          </Text>
        </View>
        <View alignItems="center">
          <Text fontSize={s(20)}>😐</Text>
          <Text fontSize={s(10)} fontFamily="Poppins-SemiBold">
            Neutral
          </Text>
        </View>
        <View alignItems="center">
          <Text fontSize={s(20)}>🤩</Text>
          <Text fontSize={s(10)} fontFamily="Poppins-SemiBold">
            Excited
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Feelings;

const styles = StyleSheet.create({});
