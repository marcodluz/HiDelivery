import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ViewOrder = ({ route }: any) => {
  const { item } = route.params;

  return (
    <View className="bg-gray-100 h-full">
      <View className="h-48 w-full absolute top-0 bg-sky-700"></View>
      <View className="px-5">
        <View className="bg-white w-full rounded-2xl p-5 shadow-sm mt-5 flex justify-between">
          <View className="flex-row gap-3 h-32">
            <View className="justify-around">
              <FontAwesome5 name="map-marker-alt" size={18} color="black" />
              <FontAwesome5 name="shopping-bag" size={18} color="black" />
            </View>
            <View className="justify-around">
              <Text className="text-lg">
                <Text className="font-bold">{item.distance} mi</Text> (until{" "}
                {item.time})
              </Text>
              <Text className="font-bold text-lg">{item.items} items</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewOrder;
