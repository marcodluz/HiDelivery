import { useAuth } from "@/app/context/AuthContext";
import useNavigationController from "@/app/services/useNavigationController";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const GetStarted = ({ navigation }: any) => {
  const { user } = useAuth();

  useNavigationController(user, "Welcome", true);

  return (
    <View className="flex-1 items-center bg-white px-9">
      <View className="w-full justify-between mt-16 mb-10">
        <View>
          <Image
            source={require("@/assets/craving.png")}
            className=" h-64 w-64 mb-10 self-center"
          />
          <Text className="text-4xl font-bold text-center mb-4">
            Today is your day
          </Text>
          <Text className="text-xl font-normal text-center">
            That all your craves and desires will get to you fast at any time!
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
      >
        <Text className="text-white font-semibold text-lg">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Create Account")}
        className="h-14 mt-5 border border-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
      >
        <Text className="text-sky-950 font-semibold text-lg">
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;
