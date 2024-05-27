import { IItem } from "@/app/interfaces/IItem";
import { Text, Image, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { useBasket } from "@/app/context/BasketContext";
import QuantityChanger from "../quantityChanger/QuantityChanger";

interface RenderItemProps {
  item: IItem;
}

const RenderItem = ({ item }: RenderItemProps) => {
  const { addItem } = useBasket();

  const screenWidth = Dimensions.get("window").width;
  const itemSize = (screenWidth - (3 - 1)) / 3 - 20;

  return (
    <TouchableOpacity
      style={{ width: itemSize }}
      className="rounded-2xl justify-between mx-1 mb-5"
      onPress={() => {
        if (item.id) {
          addItem(item.id);
          console.log(item.id);
        }
      }}
    >
      {/* {!isBasket && <QuantityChanger type={"separate"} />} */}
      {item.image ? (
        <View className="bg-slate-50 h-28 w-full rounded-lg justify-center items-center">
          <Image source={{ uri: item.image }} className="aspect-square h-16" />
        </View>
      ) : (
        <Image
          source={require("@/assets/placeholder.jpg")}
          className="rounded-2xl w-1/2 aspect-square mr-3"
        />
      )}
      <View className="w-full justify-between flex-1">
        <View>
          <Text className="text-sm font-medium text-start mt-3">
            £{item.maxPrice}
          </Text>
          <Text className="font-normal text-sm text-slate-600">
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
