import React from "react";
import { Text, View } from "react-native";
import { screenWithHeader } from "@/app/styles/Global";

const Manage = () => {
  return (
    <View className={`${screenWithHeader}`}>
      <View className="">
        <Text className="text-4xl font-semibold">Manage Account</Text>
        <Text className="mt-5">
          This is where you can manage your account details.
        </Text>
      </View>
      <View className="justify-between flex-1">
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

export default Manage;
