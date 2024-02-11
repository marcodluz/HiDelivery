import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AnimatedButton from "@/app/components/AnimatedButton/AnimatedButton";
import { useNavigation } from "@react-navigation/native";

interface ListOrdersProps {
  item: {
    id: string;
    distance: string;
    items: string;
    time: string;
    price: string;
    orderTime: number;
    accepted: boolean;
  };
}

const ListOrders = ({ item }: ListOrdersProps) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const endTime = item.orderTime + 30 * 1000; // 30 seconds from orderTime
      var timeLeft = Math.max(endTime - now, 0);

      setRemainingTime(timeLeft);

      if (item.accepted) {
        setRemainingTime(0);
        timeLeft = 0;
        return;
      }

      if (timeLeft === 0) {
        clearInterval(timer);
        console.log("Order Priority Time Finished");
      } else {
        console.log(
          "Order ID: " + item.id + " | Timeleft: " + Math.floor(timeLeft / 1000)
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [item.orderTime, item.accepted]);

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
        {item.accepted ? (
          <TouchableOpacity
            className={`h-14 mt-5 bg-emerald-600 rounded-full w-full overflow-hidden justify-center items-center`}
            onPress={() =>
              navigation.navigate("Driver Dashboard - Order", { item: item })
            }
          >
            <Text className="text-white font-semibold text-2xl">
              <FontAwesome5 name="box-open" size={22} color="white" />
              {"  "}
              View Order
            </Text>
          </TouchableOpacity>
        ) : (
          <AnimatedButton
            label={"Accept Delivery"}
            width={334}
            orderTime={item.orderTime}
            accepted={item.accepted}
            onPress={() => {
              item.accepted = true;
              console.log("Order ID: " + item.id + " | Accepted");
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListOrders;
