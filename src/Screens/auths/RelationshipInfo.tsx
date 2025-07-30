import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { AppColors } from "../../styles/colors";
import { Text, View } from "tamagui";
import AuthHeader from "../../components/Headers/AuthHeader";
import { s, vs } from "react-native-size-matters";
import CustomBtn from "../../components/buttons/CustomBtn";
import AppTextInput from "../../components/inputs/AppTextInput";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import { useNavigation } from "@react-navigation/native";

const RelationshipInfo = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [profession, setProfession] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [employeeRole, setEmployeeRole] = useState("");
  const [FreelancerWork, setFreelancerWork] = useState("");
  const navigation = useNavigation();
  return (
    <AppSafeView style={{ flex: 1, backgroundColor: AppColors.primary }}>
      <View marginHorizontal={20}>
        <AuthHeader title="Let us understand who you're looking for and where you're at." />
        <View>
          <View flexDirection="row" alignItems="center" marginTop={s(10)}>
            <Text fontFamily="Poppins-SemiBold" fontSize={s(14)}>
              Interested In{" "}
            </Text>
            <Text fontFamily="Poppins-Regular" fontSize={s(10)}>
              (Who’s energy do you connect with?)
            </Text>
          </View>
          <View
            flexDirection="row"
            marginTop={s(3)}
            justifyContent="space-between"
          >
            <CustomBtn
              btnText={"Male"}
              style={{ width: s(85), paddingVertical: s(10) }}
              selected={selectedGender === "Male"}
              onPress={() => setSelectedGender("Male")}
            />
            <CustomBtn
              btnText={"Female"}
              style={{ width: s(85), paddingVertical: s(10) }}
              selected={selectedGender === "Female"}
              onPress={() => setSelectedGender("Female")}
            />
            <CustomBtn
              btnText={"Other"}
              style={{ width: s(85), paddingVertical: s(10) }}
              selected={selectedGender === "Other"}
              onPress={() => setSelectedGender("Other")}
            />
          </View>
        </View>

        {/* relationshipStatus */}
        <View>
          <View flexDirection="row" alignItems="center" marginTop={s(10)}>
            <Text fontFamily="Poppins-SemiBold" fontSize={s(14)}>
              Relationship Status
            </Text>
          </View>
          <View gap={s(10)}>
            <View
              flexDirection="row"
              marginTop={s(5)}
              justifyContent="space-between"
            >
              <CustomBtn
                btnText={"Single"}
                style={{ width: s(130), paddingVertical: s(10) }}
                selected={relationshipStatus === "Single"}
                onPress={() => setRelationshipStatus("Single")}
              />
              <CustomBtn
                btnText={"In A Relationship"}
                style={{ width: s(130), paddingVertical: s(10) }}
                selected={relationshipStatus === "In A Relationship"}
                onPress={() => setRelationshipStatus("In A Relationship")}
              />
            </View>
            <CustomBtn
              btnText={"Prefer Not To Say"}
              style={{ width: s(130), paddingVertical: s(10) }}
              selected={relationshipStatus === "Prefer Not To Say"}
              onPress={() => setRelationshipStatus("Prefer Not To Say")}
            />
          </View>
        </View>
        {/* profession session */}
        {profession.length === 0 && (
          <View>
            <View flexDirection="row" alignItems="center" marginTop={s(10)}>
              <Text fontFamily="Poppins-SemiBold" fontSize={s(14)}>
                Are You
              </Text>
            </View>
            <View gap={s(10)}>
              <View
                flexDirection="row"
                marginTop={s(2)}
                justifyContent="space-between"
              >
                <CustomBtn
                  btnText={"Student"}
                  style={{ width: s(130), paddingVertical: s(15) }}
                  selected={profession === "Student"}
                  onPress={() => setProfession("Student")}
                />
                <CustomBtn
                  btnText={"Employee"}
                  style={{ width: s(130), paddingVertical: s(15) }}
                  selected={profession === "Employee"}
                  onPress={() => setProfession("Employee")}
                />
              </View>
              <View
                flexDirection="row"
                marginTop={s(2)}
                justifyContent="space-between"
              >
                <CustomBtn
                  btnText={"Freelancer"}
                  style={{ width: s(130), paddingVertical: s(15) }}
                  selected={profession === "Freelancer"}
                  onPress={() => setProfession("Freelancer")}
                />
                <CustomBtn
                  btnText={"Other"}
                  style={{ width: s(130), paddingVertical: s(15) }}
                  selected={profession === "Other"}
                  onPress={() => setProfession("Other")}
                />
              </View>
            </View>
          </View>
        )}
        {profession === "Student" && (
          <View>
            <View flexDirection="row" alignItems="center" marginTop={s(10)}>
              <Text fontFamily="Poppins-SemiBold" fontSize={s(14)}>
                Are You
              </Text>
            </View>
            <CustomBtn
              btnText={"Student"}
              style={{ width: s(130), paddingVertical: s(15) }}
              selected={profession === "Student"}
              onPress={() =>
                setProfession(profession === "Student" ? "" : "Student")
              }
            />
            <View marginTop={s(10)} gap={s(10)}>
              <AppTextInput
                inputText="What’s your School/college name?"
                value={schoolName}
                onChangeText={setSchoolName}
              />
              <AppTextInput
                inputText="Currently studying in?"
                value={schoolName}
                onChangeText={setSchoolName}
              />
            </View>
          </View>
        )}
        {profession === "Employee" && (
          <View>
            <View flexDirection="row" alignItems="center" marginTop={s(10)}>
              <Text fontFamily="Poppins-SemiBold" fontSize={s(14)}>
                Are You
              </Text>
            </View>
            <CustomBtn
              btnText={"Employee"}
              style={{ width: s(130), paddingVertical: s(15) }}
              selected={profession === "Employee"}
              onPress={() =>
                setProfession(profession === "Employee" ? "" : "Employee")
              }
            />
            <View marginTop={s(10)} gap={s(10)}>
              <AppTextInput value={companyName} onChangeText={setCompanyName} />
              <AppTextInput
                inputText="What’s your role there?"
                value={employeeRole}
                onChangeText={setEmployeeRole}
              />
            </View>
          </View>
        )}
        {profession === "Freelancer" && (
          <View>
            <View flexDirection="row" alignItems="center" marginTop={s(10)}>
              <Text fontFamily="Poppins-SemiBold" fontSize={s(14)}>
                Are You
              </Text>
            </View>
            <CustomBtn
              btnText={"Freelancer"}
              style={{ width: s(130), paddingVertical: s(15) }}
              selected={profession === "Freelancer"}
              onPress={() =>
                setProfession(profession === "Freelancer" ? "" : "Freelancer")
              }
            />
            <View marginTop={s(10)} gap={s(10)}>
              <AppTextInput
                inputText="What kind of work do you do?"
                value={FreelancerWork}
                onChangeText={setFreelancerWork}
              />
            </View>
          </View>
        )}
        {profession === "Other" && (
          <View>
            <View flexDirection="row" alignItems="center" marginTop={s(10)}>
              <Text fontFamily="Poppins-SemiBold" fontSize={s(14)}>
                Are You
              </Text>
            </View>
            <CustomBtn
              btnText={"Other"}
              style={{ width: s(130), paddingVertical: s(15) }}
              selected={profession === "Other"}
              onPress={() =>
                setProfession(profession === "Other" ? "" : "Other")
              }
            />
            <View marginTop={s(10)} gap={s(10)}>
              <AppTextInput
                inputText="What kind of work do you do?"
                value={FreelancerWork}
                onChangeText={setFreelancerWork}
              />
            </View>
          </View>
        )}
        <View marginTop={profession.length == 0 ? s(40) : s(30)} gap={s(10)}>
          <ButtonSecondary
            btnText="Continue"
            onPress={() => navigation.navigate("MainAppBottomTabs")}
          />
          <Text
            fontFamily="Poppins-Regular"
            textAlign="center"
            fontSize={s(11)}
          >
            Your very first vibe
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MainAppBottomTabs")}
          >
            <Text
              fontFamily="Poppins-SemiBold"
              textAlign="center"
              fontSize={s(14)}
            >
              Skip For Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppSafeView>
  );
};

export default RelationshipInfo;

const styles = StyleSheet.create({});
