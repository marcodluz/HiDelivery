import { useAuth } from "@/app/context/AuthContext";
import { IUser } from "@/app/interfaces/IUser";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { defaultScreen } from "@/app/styles/Global";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const { userSignOut, getUserData } = useAuth();
  const [userData, setUserData] = useState<IUser>();
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchData = async () => {
      setUserData(await getUserData());
    };

    fetchData();
  }, []);

  const handleSignOut = async () => {
    await userSignOut();
  };

  return (
    <View className={`${defaultScreen}`}>
      <View>
        <Text className="text-4xl font-semibold">
          Hi, {userData?.firstName}
        </Text>
      </View>
      <View className="justify-between flex-1">
        <TouchableOpacity
          onPress={() => navigation.navigate("Privacy")}
          className="h-14 mt-5 bg-gray-100 rounded-full w-full overflow-hidden justify-center items-center"
        >
          <Text className="text-black text-xl">Privacy</Text>
        </TouchableOpacity>
        <Text
          onPress={handleSignOut}
          className="text-rose-600 font-semibold text-base text-center"
        >
          Logout
        </Text>
      </View>
    </View>
  );
};

export default Account;
