import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useOrder } from "@/app/context/OrderContext";

const ViewOrder = () => {
  const { order } = useOrder();

  return (
    <View className="bg-white h-full">
      <View className="p-5">
        <View className="bg-red-100 w-full flex justify-between">
          <Text className="font-bold text-xl">Order #001</Text>
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
      </View>
    </View>
  );
};

export default ViewOrder;
