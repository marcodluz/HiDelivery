import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { defaultScreen } from "@/app/styles/Global";
import Item from "@/app/components/item/Item";
import { useBasketItems } from "@/app/services/useBasketItems";

const Basket = () => {
  const basketItems = useBasketItems();

  return (
    <View className={`${defaultScreen}`}>
      <View className="">
        <Text className="text-4xl font-semibold">Basket</Text>
        <View className="h-full -mb-16 pt-4">
          <FlatList
            data={basketItems}
            numColumns={3}
            renderItem={({ item }) => <Item item={item} />}
            columnWrapperStyle={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 1.3,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Basket;
