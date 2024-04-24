import { useAuth } from "@/app/context/AuthContext";
import { IUser } from "@/app/interfaces/IUser";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { defaultScreen } from "@/app/styles/Global";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";

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
    Alert.alert(
      "Logout",
      "Are you sure you want to logout from your account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Logout ", onPress: () => userSignOut() },
      ]
    );
  };

  return (
    <View className={`${defaultScreen}`}>
      <View>
        <Text className="text-4xl font-semibold">
          Hi, {userData?.firstName}
        </Text>
      </View>
      <View className="justify-between flex-1">
        <View>
          <TouchableOpacity className="h-14 mt-5 overflow-hidden items-center flex-row">
            <FontAwesome6 name="user" size={22} color="black" />
            <Text className="text-black text-xl ml-2">Manage Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Privacy")}
            className="h-14 mt-5 overflow-hidden items-center flex-row"
          >
            <FontAwesome6 name="eye" size={22} color="black" />
            <Text className="text-black text-xl ml-2">Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Driver Dashboard")}
            className="h-14 mt-5 overflow-hidden items-center flex-row"
          >
            <FontAwesome6 name="car" size={22} color="black" />
            <Text className="text-black text-xl ml-2">Driver Dashboard</Text>
            <View className="bg-green-300 py-1 px-4 rounded-full ml-2">
              <Text className="font-bold">Apply now</Text>
            </View>
          </TouchableOpacity>
        </View>
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
