import { useAuth } from "@/app/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const Account = () => {
  const { user, userSignOut, userDeleteAccount } = useAuth();
  const navigation = useNavigation();

  const handleSignOut = async () => {
    await userSignOut();
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account and all associated information? This action is irreversible.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: () => userDeleteAccount() },
      ]
    );
  };

  return (
    <View className="px-5 h-full bg-white flex-col justify-between py-4">
      <Text className="text-2xl font-semibold">{user?.email}</Text>
      <View className="">
        <TouchableOpacity
          className="h-14 mt-5 bg-rose-600 rounded-full w-full overflow-hidden justify-center items-center"
          onPress={handleSignOut}
        >
          <Text className="text-white font-semibold text-2xl">
            {"  "}
            Logout
          </Text>
        </TouchableOpacity>
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

export default Account;
