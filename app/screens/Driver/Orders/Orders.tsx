import React, { useState } from "react";
import { View, FlatList } from "react-native";
import RenderOrder from "@/app/components/RenderOrder/RenderOrder";
import { useOrders } from "@/app/services/useOrders";

const Orders = () => {
  const [startTime, setStartTime] = useState(1709745048421);
  const [endTime, setEndTime] = useState(1709756842810);
  const ordersList = useOrders(startTime, endTime);

  return (
    <View className="bg-gray-100 h-full">
      <View className="px-5">
        <FlatList
          data={ordersList}
          renderItem={({ item }) => <RenderOrder order={item} />}
        />
      </View>
    </View>
  );
};

export default Orders;