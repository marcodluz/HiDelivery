import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useOrder } from "@/app/context/OrderContext";

const ViewOrder = () => {
  const { order } = useOrder();

  return (
    <View className="bg-white h-full">
      <View className="p-5">
        <View className="w-full flex justify-between">
          <Text className="font-bold text-3xl">Order #0001</Text>
          <View className="flex-row gap-3 h-32">
            <View className="justify-around">
              <FontAwesome5 name="map-marker-alt" size={18} color="black" />
              <FontAwesome5 name="shopping-bag" size={18} color="black" />
            </View>
            <View className="justify-around">
              <Text className="text-lg">
                <Text className="font-bold">{order?.distance} mi</Text> (until{" "}
                {order?.time})
              </Text>
              <Text className="font-bold text-lg">
                {order?.items.length} items
              </Text>
            </View>
          </View>
        </View>
        <ScrollView className="h-full">
          <TouchableOpacity className="flex-row gap-x-5">
            <Image
              source={require("@/assets/burger.jpg")}
              className="rounded-2xl w-1/3 aspect-square"
            />
            <View className="flex-col w-3/5 justify-between">
              <Text className="font-medium text-lg">Original Cheeseburger</Text>
              <Text className="font-bold text-xl">£10.99 - £15.99</Text>
              <Text className="font-bold text-xl text-emerald-500">Done</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ViewOrder;
