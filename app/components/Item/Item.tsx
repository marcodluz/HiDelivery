import { IItem } from "@/app/interfaces/IItem";
import { Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import QuantityChanger from "../QuantityChanger/QuantityChanger";

interface RenderItemProps {
  item: IItem;
}

const RenderItem = ({ item }: RenderItemProps) => {
  return (
    <TouchableOpacity className="border-slate-200 border rounded-2xl justify-between items-center p-3 mb-[2vw] w-[49%]">
      {/* <QuantityChanger type={"separate"} /> */}
      {item.image ? (
        <Image source={{ uri: item.image }} className="aspect-square h-28" />
      ) : (
        <Image
          source={require("@/assets/placeholder.jpg")}
          className="rounded-2xl w-1/2 aspect-square"
        />
      )}
      <View className="w-full">
        <Text className="text-base font-bold">{item.title}</Text>
        <Text className="text-sm">Description</Text>
        <Text className="text-base font-semibold text-start mt-3">
          £{item.maxPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
