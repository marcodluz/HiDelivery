import { IItem } from "@/app/interfaces/IItem";
import { Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";

interface RenderItemProps {
  item: IItem;
}

const RenderItem = ({ item }: RenderItemProps) => {
  return (
    <TouchableOpacity className="border-slate-200 border rounded-2xl p-3 mb-[2vw]">
      {/* <QuantityChanger type={"separate"} /> */}
      {item.image ? (
        <Image source={{ uri: item.image }} className="aspect-square h-28" />
      ) : (
        <Image
          source={require("@/assets/placeholder.jpg")}
          className="rounded-2xl aspect-square w-1/2"
        />
      )}
      <View className="mt-2  w-1/2">
        <View>
          <Text className="text-base font-bold">{item.title}</Text>
        </View>
        <Text className="text-base font-semibold text-start mt-3">
          £{item.maxPrice}
        </Text>
        <Text className="text-base font-semibold text-start mt-3">
          Quantity: {item.quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
