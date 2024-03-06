import React, { useEffect, useMemo, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { IOrder } from "@/app/interfaces/IOrder";
import RenderOrder from "@/app/components/RenderOrder/RenderOrder";
import * as Database from "@/app/services/database";
import { db } from "@/firebase";
import {
  query,
  ref,
  orderByChild,
  startAt,
  endAt,
  onValue,
} from "firebase/database";
import { useOrders } from "@/app/services/useOrders";

const Orders = () => {
  /*   const listData: IOrder[] = [
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
  ]; */
  const [startTime, setStartTime] = useState(1709745048421); // Replace with your start time
  const [endTime, setEndTime] = useState(1709756842810);
  const ordersList = useOrders(startTime, endTime);

  return (
    <View className="bg-gray-100 h-full">
      <View className="px-5">
        <FlatList
          data={ordersList}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <RenderOrder order={item} />}
        />
        {/*         {ordersList.map((item, index) => (
          <Text key={index}>{item.price}</Text>
        ))} */}
      </View>
    </View>
  );
};

export default Orders;
