import { IItem } from "@/app/interfaces/IItem";
import { Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { useBasket } from "@/app/context/BasketContext";

interface RenderItemProps {
  item: IItem;
}

const RenderItem = ({ item }: RenderItemProps) => {
  const { addItem } = useBasket();

  return (
    <TouchableOpacity
      className="border-slate-200 border rounded-2xl justify-between items-center px-2 py-3 mb-3 w-full flex-row"
      onPress={() => addItem(item)}
    >
      {/* <QuantityChanger type={"separate"} /> */}
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          className="aspect-square h-16 mr-3"
        />
      ) : (
        <Image
          source={require("@/assets/placeholder.jpg")}
          className="rounded-2xl w-1/2 aspect-square mr-3"
        />
      )}
      <View className="w-full justify-between mt-2 flex-1">
        <View>
          <Text className="font-normal text-sm">{item.title}</Text>
          {/* <Text className="text-sm">
            {item.description ? item.description : "No description"}
          </Text> */}
        </View>
        <Text className="text-base font-semibold text-start mt-3">
          £{item.maxPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
