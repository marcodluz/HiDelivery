import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useOrder } from "@/app/context/OrderContext";
import QuantityChanger from "@/app/components/quantityChanger/QuantityChanger";
import { screenWithHeader } from "@/app/styles/Global";

const ViewOrder = () => {
  const { order } = useOrder();
  const placeholderImage = require("@/assets/placeholder.jpg");

  return (
    <View className={`${screenWithHeader}`}>
      <View className="flex-column h-full">
        <ScrollView>
          <View className="w-full flex justify-between">
            <Text className="font-bold text-3xl">Order #{order?.id}</Text>
            <View className="flex-row gap-3 h-32">
              <View className="justify-around">
                <FontAwesome5 name="map-marker-alt" size={18} color="black" />
                <FontAwesome5 name="shopping-bag" size={18} color="black" />
              </View>
              <View className="justify-around">
                <Text className="text-lg">
                  <Text className="font-bold">{order?.distance} mi</Text> (until{" "}
                  {order?.time})
                </Text>
                <Text className="font-bold text-lg">
                  {order?.items.length} items
                </Text>
              </View>
            </View>
          </View>

          {order?.items.map((item, index) => (
            <View
              key={index}
              className={`flex-row gap-x-5 my-5 ${
                index === order?.items.length - 1 ? "mb-28" : ""
              }`}
            >
              <Image
                source={item.image ? item.image : placeholderImage} // Use ternary operator
                className="rounded-2xl w-1/3 aspect-square"
              />
              <View className="flex-col w-3/5 justify-between flex-1">
                <Text className="font-medium text-lg">{item.title}</Text>
                <Text className="font-bold text-xl">
                  £{item.minPrice} - £{item.maxPrice}
                </Text>
                <QuantityChanger
                  maxQuantity={item.quantity}
                  type={"combined"}
                />
              </View>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          className={`h-14 mt-5 bg-rose-600 rounded-full items-center w-full overflow-hidden justify-center`}
        >
          <Text className="text-white font-semibold text-2xl">
            <FontAwesome5 name="shipping-fast" size={22} color="white" />{" "}
            Deliver Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewOrder;
