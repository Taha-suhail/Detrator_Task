import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { IS_Android } from "../constants/constants";
import HomeScreen from "../Screens/home/HomeScreen";
import BondScreen from "../Screens/home/BondScreen";
import OkasScreen from "../Screens/home/OkasScreen";

const Tab = createBottomTabNavigator();
export default function MainAppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: { display: "none" },
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#00000089",
        tabBarLabelStyle: {
          marginTop: s(5),
          fontSize: s(14),
          fontFamily: "Poppins-Bold",
          textAlign: "center",
          // flex: 1,
          // alignItems: "center",
          // justifyContent: "center",
        },
        tabBarStyle: {
          backgroundColor: AppColors.primary,
          height: vs(50),
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarIcon: () => null,
          title: "Oka(You)",
        }}
      />
      <Tab.Screen
        name="Bond"
        component={BondScreen}
        options={{
          // tabBarIcon: () => null,
          title: "Bonds",
        }}
      />
      <Tab.Screen
        name="Okas"
        component={OkasScreen}
        options={{
          // tabBarIcon: () => null,
          title: "Okas",
        }}
      />
    </Tab.Navigator>
  );
}
