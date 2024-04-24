import React from "react";
import { Text, View } from "react-native";
import { defaultScreen } from "@/app/styles/Global";

const Rewards = () => {
  return (
    <View className={`${defaultScreen}`}>
      <View className="">
        <Text className="text-4xl font-semibold">Rewards</Text>
        <Text className="mt-5">You have no rewards for now.</Text>
      </View>
    </View>
  );
};

export default Rewards;
