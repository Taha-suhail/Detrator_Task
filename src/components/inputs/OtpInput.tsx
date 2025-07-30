import { StyleSheet, TextInput, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { s, vs } from "react-native-size-matters";
type OtpInputProps = {
  value: string[];
  onChangeText: (otp: string[]) => void;
};

const OtpInput = ({ value, onChangeText }: OtpInputProps) => {
  // const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputs = useRef<Array<TextInput | null>>([]);

  const handleOTPChange = (index: number, val: string) => {
    const newOtp = [...value];
    newOtp[index] = val;
    onChangeText(newOtp);
    // Auto-focus next input
    if (value && index < value.length - 1) {
      otpInputs.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };
  const setInputRef = useCallback(
    (index: number) => (ref: TextInput | null) => {
      otpInputs.current[index] = ref;
    },
    []
  );

  return (
    <View style={styles.row}>
      {value.map((d, i) => (
        <View key={i} style={styles.inputContainer}>
          <TextInput
            // key={i}
            placeholder=""
            style={styles.input}
            value={d}
            onChangeText={(text) => handleOTPChange(i, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={setInputRef(i)}
            underlineColorAndroid="transparent"
            cursorColor="black"
            scrollEnabled={true}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    paddingHorizontal: s(20),
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "#9ca3af", // border-gray-400
    width: s(50), // w-12
    height: vs(65), // h-12
    fontWeight: "800", // font-extrabold
    fontSize: s(15), // text-xl
    backgroundColor: "white",
    borderRadius: s(10), // rounded-lg
  },
});

export default OtpInput;
