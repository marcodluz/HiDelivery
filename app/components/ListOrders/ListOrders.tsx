import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AnimatedButton from "@/app/components/AnimatedButton/AnimatedButton";

interface ListOrdersProps {
  item: {
    id: string;
    distance: string;
    items: string;
    time: string;
    price: string;
    orderTime: number;
  };
}

const ListOrders = ({ item }: ListOrdersProps) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const endTime = item.orderTime + 30 * 1000; // 30 seconds from orderTime
      const timeLeft = Math.max(endTime - now, 0);

      setRemainingTime(timeLeft);

      if (timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [item.orderTime]);

  const formatTime = (time: number) => {
    const seconds = Math.floor(time / 1000);
    return `0:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <TouchableOpacity className="bg-white w-full rounded-2xl p-5 shadow-sm mt-5 flex justify-between">
      <View className="flex-row gap-3 h-32">
        <View className="justify-around">
          <FontAwesome5 name="map-marker-alt" size={18} color="black" />
          <FontAwesome5 name="shopping-bag" size={18} color="black" />
          <FontAwesome5 name="bullhorn" size={18} color="black" />
        </View>
        <View className="justify-around">
          <Text className="text-lg">
            <Text className="font-bold">{item.distance} mi</Text> (until{" "}
            {item.time})
          </Text>
          <Text className="font-bold text-lg">{item.items} items</Text>
          <Text className="font-bold text-lg">
            Global Announcement{" "}
            <Text className="font-normal text-gray-500">
              {formatTime(remainingTime)}
            </Text>
          </Text>
        </View>
      </View>
      <View className="border-b border-gray-300 my-5"></View>
      <View className="flex items-center">
        <Text className="font-bold text-3xl">{item.price}£</Text>
        <Text className="text-gray-500 text-base">Including Night Bonus</Text>
        <AnimatedButton
          label={"Accept Delivery"}
          width={350}
          startTime={item.orderTime}
          onPress={() => {
            console.log("Button Pressed with order ID: " + item.id);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListOrders;