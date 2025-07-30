import React from "react";
import { Image, Text, View } from "tamagui";
import { AppColors } from "../../styles/colors";
import { s } from "react-native-size-matters";

const HomeHeader = () => {
  return (
    <View
      backgroundColor={AppColors.primary}
      padding={s(3)}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal={s(10)}
      borderBottomWidth={s(1)}
      borderBottomColor={"white"}
    >
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={10}
        paddingVertical={s(5)}
      >
        <View>
          <Image
            source={require("../../assets/images/applogo.png")}
            width={s(30)}
            height={s(30)}
            alignItems="center"
          />
        </View>
        <Text fontFamily="Poppins-Bold" fontSize={s(18)}>
          OkaBoka
        </Text>
      </View>
      <View flexDirection="row" alignItems="center" gap={s(12)}>
        <View>
          <Text fontSize={s(18)}>🔔</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/profilepic.jpg")}
            width={s(30)}
            height={s(30)}
            borderRadius={s(15)}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
