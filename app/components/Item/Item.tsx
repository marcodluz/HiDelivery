import { IItem } from "@/app/interfaces/IItem";
import { Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import QuantityChanger from "../QuantityChanger/QuantityChanger";

interface RenderItemProps {
  item: IItem;
}

const RenderItem = ({ item }: RenderItemProps) => {
  return (
    <TouchableOpacity className="py-3 px-1 w-1/3 mt-3">
      <QuantityChanger type={"separate"} />
      <View className="bg-slate-100 rounded-lg h-28 mb-2 justify-center items-center">
        {item.image ? (
          <Image source={{ uri: item.image }} className="aspect-square h-3/4" />
        ) : (
          <Image
            source={require("@/assets/placeholder.jpg")}
            className="rounded-2xl w-1/2 aspect-square"
          />
        )}
      </View>
      <Text className="text-base font-semibold text-start mb-1">
        £{item.maxPrice}
      </Text>
      <Text className="text-base">
        San Pellegrino Sparkling Natural Mineral Water 1L
      </Text>
    </TouchableOpacity>
  );
};

export default RenderItem;
