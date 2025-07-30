import { StyleSheet } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { AppColors } from "../../styles/colors";
import { Image, Text, View } from "tamagui";
import { s } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
  AboutYou: undefined;
};
const Profile = () => {
  const [userName, setUserName] = React.useState("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <AppSafeView style={{ flex: 1, backgroundColor: AppColors.primary }}>
      <View alignItems="center" flex={1} gap={s(20)} marginTop={s(50)}>
        <View borderRadius={s(100)} alignItems="center">
          <Image
            source={require("../../assets/images/profilepic.jpg")}
            height={s(150)}
            width={s(150)}
            borderRadius={s(100)}
            overflow="hidden"
          />
        </View>
        <Text fontFamily="Poppins-SemiBold" fontSize={s(15)}>
          What should we call you?
        </Text>
        <AppTextInput
          inputText="Full Name"
          value={userName}
          onChangeText={setUserName}
          placeholder="Your Name"
          style={{ width: s(300) }}
        />
        <ButtonSecondary
          btnText={"Lets Get To Know You"}
          style={{ paddingVertical: s(15), padding: s(20) }}
          onPress={() => {
            if (!userName) {
              showMessage({
                message: "Please enter your name.",
                type: "danger",
              });
              return;
            }
            navigation.navigate("AboutYou");
          }}
        />
        <Text fontFamily="Poppins-Regular">Your safety is our priority</Text>
      </View>
    </AppSafeView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
