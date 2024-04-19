import { useAuth } from "@/app/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Account = () => {
  const navigation = useNavigation();
  const { user, userSignOut } = useAuth();

  React.useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, []);

  const handleSignOut = async () => {
    await userSignOut();
  };

  return (
    <>
      <TouchableOpacity
        className="h-14 mt-5 bg-rose-600 rounded-full w-full overflow-hidden justify-center items-center"
        onPress={handleSignOut}
      >
        <Text className="text-white font-semibold text-2xl">
          {"  "}
          Logout
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Account;
