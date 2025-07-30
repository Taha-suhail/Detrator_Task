import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { Button, Text, View } from "tamagui";
import { AppColors } from "../../styles/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../../components/inputs/AppTextInput";
import CustomBtn from "../../components/buttons/CustomBtn";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import AuthHeader from "../../components/Headers/AuthHeader";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  RelationshipScreen: undefined;
};
const AboutYouScreen = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedGender, setSelectedGender] = useState("");
  const [location, setLocation] = useState("");
  const [othergender, setOtherGender] = useState("");
  // console.log(selectedGender);
  return (
    <AppSafeView style={{ flex: 1, backgroundColor: AppColors.primary }}>
      <View marginHorizontal={s(20)}>
        <AuthHeader title={"A little about you so we match better"} />
        <View>
          <Text
            fontFamily="Poppins-SemiBold"
            fontSize={s(14)}
            marginTop={s(15)}
          >
            Date of Birth
          </Text>
          <View flexDirection="row" justifyContent="space-between">
            <AppTextInput
              value={day}
              onChangeText={setDay}
              placeholder="DD"
              style={{ width: s(85), alignItems: "center" }}
            />
            <AppTextInput
              value={month}
              onChangeText={setMonth}
              placeholder="MM"
              style={{ width: s(85), alignItems: "center" }}
            />
            <AppTextInput
              value={year}
              onChangeText={setYear}
              placeholder="YYYY"
              style={{ width: s(85), alignItems: "center" }}
            />
          </View>
        </View>
        <View>
          <Text
            fontFamily="Poppins-SemiBold"
            fontSize={s(14)}
            marginTop={s(15)}
          >
            Gender
          </Text>
          <View flexDirection="row" justifyContent="space-between">
            <CustomBtn
              btnText={"Male"}
              style={{ width: s(85), paddingVertical: s(15) }}
              selected={selectedGender === "Male"}
              onPress={() => setSelectedGender("Male")}
            />
            <CustomBtn
              btnText={"Female"}
              style={{ width: s(85), paddingVertical: s(15) }}
              selected={selectedGender === "Female"}
              onPress={() => setSelectedGender("Female")}
            />
            <CustomBtn
              btnText={"Other"}
              style={{ width: s(85), paddingVertical: s(15) }}
              selected={selectedGender === "Other"}
              onPress={() => setSelectedGender("Other")}
            />
          </View>
          {selectedGender === "Other" && (
            <View marginTop={s(10)}>
              <AppTextInput
                placeholder="Write here"
                value={othergender}
                onChangeText={setOtherGender}
              />
            </View>
          )}
          <View marginTop={s(10)}>
            <AppTextInput
              inputText="Location"
              value={location}
              onChangeText={setLocation}
            />
            <TouchableOpacity>
              <View flexDirection="row" alignItems="center" marginTop={s(10)}>
                <Ionicons name="location-sharp" size={24} color="#757575" />
                <Text fontFamily="Poppins-Regular">Use current location</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View marginTop={vs(80)} gap={s(10)}>
          <ButtonSecondary
            btnText="Continue"
            onPress={() => navigation.navigate("RelationshipScreen")}
          />
          <Text fontFamily="Poppins-Regular" textAlign="center">
            Who are you open to connecting with?
          </Text>
        </View>
      </View>
      {/* </View> */}
    </AppSafeView>
  );
};

export default AboutYouScreen;

const styles = StyleSheet.create({});
