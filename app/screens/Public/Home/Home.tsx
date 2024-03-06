import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import * as Database from "@/app/services/database";

const order = {
  distance: "18.3",
  time: "02:05",
  price: "25.89",
  //orderTime: Date.parse("2024-02-06T23:42:00.000Z"),
  orderTime: Date.now(),
  accepted: false,
  items: [
    {
      title: "Original Cheeseburger",
      image: require("@/assets/burger.jpg"),
      quantity: 3,
      minPrice: 5.99,
      maxPrice: 7.99,
    },
  ],
};

const Home = () => {
  return (
    <View className="flex-1 justify-between items-center bg-white">
      <TouchableOpacity
        className="py-2 items-center"
        onPress={() => Database.createOrder(order)}
      >
        <Text className="text-black font-semibold text-lg">
          Create an Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
