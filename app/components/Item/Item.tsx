import { IItem } from "@/app/interfaces/IItem";
import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";

interface RenderItemProps {
  item: IItem;
}

const RenderItem = ({ item }: RenderItemProps) => {
  return (
    <TouchableOpacity className="items-center p-3 w-1/3">
      {item.image ? (
        <Image
          source={{ uri: item.image }} // Use ternary operator
          className="rounded-2xl w-1/2 aspect-square"
        />
      ) : (
        <Image
          source={require("@/assets/placeholder.jpg")} // Use ternary operator
          className="rounded-2xl w-1/2 aspect-square"
        />
      )}
      <Text className="text-xl font-bold">{item.title}</Text>
      <Text className="text-lg font-semibold">£{item.maxPrice}</Text>
    </TouchableOpacity>
  );
};

export default RenderItem;
