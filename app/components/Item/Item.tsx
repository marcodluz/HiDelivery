import { IItem } from "@/app/interfaces/IItem";
import { Text, Image, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { useBasket } from "@/app/context/BasketContext";
import QuantityChanger from "../quantityChanger/QuantityChanger";

interface RenderItemProps {
  item: IItem;
  isBasket?: boolean;
}

const RenderItem = ({ item, isBasket }: RenderItemProps) => {
  const { addItem } = useBasket();

  const screenWidth = Dimensions.get("window").width;
  const itemSize = (screenWidth - (3 - 1) * 6) / 3 - 10;

  return (
    <TouchableOpacity
      style={{ width: itemSize }}
      className={`rounded-2xl justify-between items-center px-2 py-3 mb-3`}
      onPress={() => {
        !isBasket && addItem(item);
      }}
    >
      {!isBasket && <QuantityChanger type={"separate"} />}
      {item.image ? (
        <View className="bg-slate-100 h-28 w-28 rounded-lg justify-center items-center">
          <Image source={{ uri: item.image }} className="aspect-square h-16" />
        </View>
      ) : (
        <Image
          source={require("@/assets/placeholder.jpg")}
          className="rounded-2xl w-1/2 aspect-square mr-3"
        />
      )}
      <View className="w-full justify-between mt-2 flex-1">
        <View>
          <Text className="text-sm font-medium text-start mt-3">
            £{item.maxPrice}
          </Text>
          <Text className="font-normal text-xs text-slate-600">
            {item.title}
          </Text>
          {isBasket && (
            <Text className="text-sm">Quantity: {item.quantity}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
