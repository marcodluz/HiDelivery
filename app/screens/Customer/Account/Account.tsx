import { useAuth } from "@/app/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const Account = () => {
  const navigation = useNavigation();
  const { user, userSignOut, userDeleteAccount } = useAuth();

  React.useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, []);

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
    <View>
      <Text className="text-2xl font-semibold">{user?.email}</Text>
      <TouchableOpacity
        className="h-14 mt-5 bg-rose-600 rounded-full w-full overflow-hidden justify-center items-center"
        onPress={handleDeleteAccount}
      >
        <Text className="text-white font-semibold text-2xl">
          {"  "}
          Delete Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="h-14 mt-5 bg-rose-600 rounded-full w-full overflow-hidden justify-center items-center"
        onPress={handleSignOut}
      >
        <Text className="text-white font-semibold text-2xl">
          {"  "}
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
