import React from "react";
import { View, Text } from "react-native";
import { defaultScreen } from "@/app/styles/Global";

const Basket = () => {
  return (
    <View className={`${defaultScreen}`}>
      <View className="">
        <Text className="text-4xl font-semibold">Basket</Text>
        <Text className="mt-5">Your basket is empty for now.</Text>
      </View>
    </View>
  );
};

export default Basket;
