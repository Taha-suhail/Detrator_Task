import { StatusBar } from "expo-status-bar";

import { TamaguiProvider, View, Text } from "tamagui";
import { config } from "./tamagui.config.ts";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack.tsx";
import FlashMessage from "react-native-flash-message";
import { vs } from "react-native-size-matters";

export default function App() {
  const [fontLoaded] = useFonts({
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontLoaded) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <FlashMessage
          position="top"
          style={{ paddingVertical: vs(20), marginTop: vs(25) }}
        />
        <MainAppStack />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
