import { useAuth } from "@/app/context/AuthContext";
import React from "react";
import { Alert, Text, View } from "react-native";
import { screenWithHeader } from "@/app/styles/Global";

const Privacy = () => {
  const { userDeleteAccount } = useAuth();

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account and all associated information? This action is irreversible!",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", onPress: () => userDeleteAccount() },
      ]
    );
  };

  return (
    <View className={`${screenWithHeader}`}>
      <View className="">
        <Text className="text-4xl font-semibold">Privacy</Text>
        <Text className="mt-5">
          This is where your privacy goes. This page is under development.
        </Text>
      </View>
      <View className="justify-between flex-1">
        <View></View>
        <Text
          className="text-rose-600 font-semibold text-base text-center mt-5"
          onPress={handleDeleteAccount}
        >
          {"  "}
          Delete Account
        </Text>
      </View>
    </View>
  );
};

export default Privacy;
