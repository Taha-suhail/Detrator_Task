import { View, Text, Image } from "tamagui";
import React, { FC } from "react";
import { TextInput } from "react-native";
import { s } from "react-native-size-matters";
interface AppTextInputProps {
  inputText?: string; // The text to display above the input field
  value: string; // The current value of the input field
  onChangeText: (text: string) => void; // Function to call when the text changes
  placeholder?: string; // Placeholder text for the input field
  style?: object; // Additional styles for the input field
}
const AppTextInput: FC<AppTextInputProps> = ({
  inputText,
  value,
  onChangeText,
  placeholder,
  style,
}) => {
  return (
    <View>
      {inputText ? (
        <View>
          <Text fontSize={14} fontFamily={"Poppins-Bold"} color={"#000"}>
            {inputText}
          </Text>
        </View>
      ) : null}
      <View
        backgroundColor={"#fff"}
        borderRadius={8}
        paddingHorizontal={10}
        paddingVertical={5}
        marginTop={6}
        width={"100%"}
        style={[style]}
      >
        <TextInput
          value={value}
          onChangeText={(text) => onChangeText(text)}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default AppTextInput;
