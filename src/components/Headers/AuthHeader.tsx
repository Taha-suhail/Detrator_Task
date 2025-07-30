import { StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "tamagui";
import { AntDesign } from "@expo/vector-icons";
import { s } from "react-native-size-matters";
interface AuthHeaderProps {
  title: string;
}
const AuthHeader: FC<AuthHeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          flexDirection="row"
          alignItems="center"
          marginTop={s(20)}
          // marginLeft={s(20)}
        >
          <AntDesign name="arrowleft" size={24} color="#757575" />
        </View>
      </TouchableOpacity>
      <Text fontFamily="Poppins-Bold" fontSize={s(16)} marginTop={20}>
        {title}
      </Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({});
