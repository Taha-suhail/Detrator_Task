import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React, { FC, ReactNode } from "react";
import { IS_Android } from "../../constants/constants";
import { AppColors } from "../../styles/colors";

interface AppSafeViewProps {
  children: ReactNode;
  style?: ViewStyle;
}
const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView
      flex={1}
      // style={{ flex: 1 }}

      paddingTop={IS_Android ? StatusBar.currentHeight || 0 : 0}
      // backgroundColor={AppColors.primary}
    >
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.primary,
    paddingTop: IS_Android ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
});
