import React from "react";
import { View, FlatList } from "react-native";
import { IOrder } from "@/app/interfaces/IOrder";
import RenderOrder from "@/app/components/RenderOrder/RenderOrder";

const Orders = () => {
  const listData: IOrder[] = [
    {
      id: "1",
      distance: "18.3",
      time: "02:05",
      price: "25.89",
      //orderTime: Date.parse("2024-02-06T23:42:00.000Z"),
      orderTime: Date.now(),
      accepted: false,
      items: [
        {
          id: 1,
          title: "Original Cheeseburger",
          image: require("@/assets/burger.jpg"),
          quantity: 3,
          minPrice: 5.99,
          maxPrice: 7.99,
        },
      ],
    },
  ];

  return (
    <View className="bg-gray-100 h-full">
      <View className="px-5">
        <FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderOrder order={item} />}
        />
      </View>
    </View>
  );
};

export default Orders;
