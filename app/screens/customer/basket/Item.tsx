import { IItem } from "@/app/interfaces/IItem";
import { Text, Image, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";

interface RenderItemProps {
  itemId: string;
  isBasket?: boolean;
}

const RenderItem = ({ itemId }: RenderItemProps) => {
  return (
    <TouchableOpacity>
      <Text>{itemId}</Text>
    </TouchableOpacity>
  );
};

export default RenderItem;
