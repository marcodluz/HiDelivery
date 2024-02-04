import React from "react";
import { View, FlatList } from "react-native";
import ListOrders from "@/app/components/ListOrders/ListOrders";

const DriverDashboard = ({ navigation }: any) => {
  const listData = [
    {
      id: "1",
      distance: "18.3",
      items: "5",
      time: "02:05",
      price: "25.89",
      orderTime: Date.parse("2024-02-04T20:09:00.000Z"),
    },
  ];

  return (
    <View className="bg-gray-100 h-full">
      <View className="h-48 w-full absolute top-0 bg-sky-700"></View>
      <View className="px-5">
        <FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListOrders item={item} />}
        />
      </View>
    </View>
  );
};

export default DriverDashboard;
