import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import AnimatedButton from "@/app/components/AnimatedButton/AnimatedButton";
import { useNavigation } from "@react-navigation/native";
import { IOrder } from "@/app/interfaces/IOrder";
import { useOrder } from "@/app/context/OrderContext";

interface RenderOrderProps {
  order: IOrder;
}

const RenderOrder = ({ order }: RenderOrderProps) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isAccepted, setIsAccepted] = useState(order.accepted);
  const { setOrder } = useOrder();
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const endTime = order.orderTime + 30 * 1000; // 30 seconds from orderTime
      var timeLeft = Math.max(endTime - now, 0);

      setRemainingTime(timeLeft);

      if (isAccepted) {
        setRemainingTime(0);
        timeLeft = 0;
        return;
      }

      if (timeLeft === 0) {
        clearInterval(timer);
        console.log("Order Priority Time Finished");
      } else {
        console.log(
          "Order ID: " +
            order.id +
            " | Timeleft: " +
            Math.floor(timeLeft / 1000)
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [order.orderTime, isAccepted]);

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
          <FontAwesome6 name="location-dot" size={18} color="black" />
          <FontAwesome6 name="bag-shopping" size={18} color="black" />
          <FontAwesome6 name="bullhorn" size={18} color="black" />
        </View>
        <View className="justify-around">
          <Text className="text-lg">
            <Text className="font-bold">{order.distance} mi</Text> (until{" "}
            {order.time})
          </Text>
          <Text className="font-bold text-lg">{order.items.length} items</Text>
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
        <Text className="font-bold text-3xl">{order.price}£</Text>
        <Text className="text-gray-500 text-base">Including Night Bonus</Text>
        {isAccepted ? (
          <TouchableOpacity
            className={`h-14 mt-5 bg-rose-600 rounded-full w-full overflow-hidden justify-center items-center`}
            onPress={() => {
              setOrder(order);
              navigation.navigate("Driver Dashboard - Order");
            }}
          >
            <Text className="text-white font-semibold text-2xl">
              <FontAwesome6 name="box-open" size={22} color="white" />
              {"  "}
              View Order
            </Text>
          </TouchableOpacity>
        ) : (
          <AnimatedButton
            label={"Accept Delivery"}
            width={334}
            orderTime={order.orderTime}
            accepted={isAccepted}
            onPress={() => {
              setIsAccepted(true);
              console.log("Order ID: " + order.id + " | Accepted");
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RenderOrder;
