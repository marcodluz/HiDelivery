import React from "react";
import { View, Text, FlatList } from "react-native";
import { defaultScreen } from "@/app/styles/Global";
import { useBasketItems } from "@/app/services/useBasketItems";
import RenderItem from "./Item";

const Basket = () => {
  const basketItemsIds = useBasketItems();

  return (
    <View className={`${defaultScreen}`}>
      <View className="">
        <Text className="text-4xl font-semibold">Basket</Text>
        <View className="h-full -mb-16 pt-4">
          <FlatList
            data={basketItemsIds}
            renderItem={({ item }) => (
              <RenderItem itemId={item} /> // Pass itemId to RenderItem
            )}
            keyExtractor={(item) => item} // Set document reference ID as the key
          />
        </View>
      </View>
    </View>
  );
};

export default Basket;
