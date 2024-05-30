import React from "react";
import { Text, View } from "react-native";
import { defaultScreen } from "@/app/styles/Global";

const Orders = () => {
  return (
    <View className={`${defaultScreen}`}>
      <View className="">
        <Text className="text-4xl font-semibold">Orders</Text>
        <Text className="mt-5">You haven't completed an order yet.</Text>
      </View>
    </View>
  );
};

export default Orders;
