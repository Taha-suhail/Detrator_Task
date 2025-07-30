import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { AppColors } from "../../styles/colors";
import HomeHeader from "../../components/Headers/HomeHeader";
import { s } from "react-native-size-matters";
import Feelings from "../../components/Feelings";
import HomeCard from "../../components/cards/HomeCard";
import { DATA } from "../../data/Dummy";
import { Image, View } from "tamagui";
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";
const HomeScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    if (result.canceled) {
      showMessage({
        message: "you did not select any image",
      });
    }
  };
  return (
    <AppSafeView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HomeHeader />
      <Feelings />
      {/* <HomeCard data={DATA} /> */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HomeCard data={item} />}
      />
      <View position="absolute" bottom={s(5)} left={s(160)}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={require("../../assets/images/Plus.png")} />
        </TouchableOpacity>
      </View>
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
