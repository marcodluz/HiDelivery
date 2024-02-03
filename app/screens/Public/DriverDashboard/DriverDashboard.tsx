import BackButton from "@/app/components/BackButton/BackButton";
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const DriverDashboard = ({ navigation }: any) => {
  const listData = [
    {
      id: "1",
      distance: "1.3 miles",
      items: "3 items",
      time: "11:30AM-03:40PM",
      address: "255 Disson Road, London, UK",
      price: "25£",
    },
    {
      id: "2",
      distance: "5.6 miles",
      items: "25 items",
      time: "12:30AM-04:20PM",
      address: "3 Cringe Drive, London, UK",
      price: "35£",
    },
    {
      id: "3",
      distance: "1.3 miles",
      items: "3 items",
      time: "11:30AM-03:40PM",
      address: "255 Disson Road, London, UK",
      price: "25£",
    },
    {
      id: "4",
      distance: "1.3 miles",
      items: "3 items",
      time: "11:30AM-03:40PM",
      address: "255 Disson Road, London, UK",
      price: "25£",
    },
    {
      id: "5",
      distance: "1.3 miles",
      items: "3 items",
      time: "11:30AM-03:40PM",
      address: "255 Disson Road, London, UK",
      price: "25£",
    },
    {
      id: "6",
      distance: "1.3 miles",
      items: "3 items",
      time: "11:30AM-03:40PM",
      address: "255 Disson Road, London, UK",
      price: "25£",
    },
  ];

  return (
    <View className="bg-white h-full px-5 pt-14">
      <View className="flex-row items-center">
        <BackButton navigation={navigation} />
        <Text className="text-lg font-bold text-center absolute w-full -z-10">
          Driver Dashboard
        </Text>
      </View>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className={`bg-white w-full h-48 rounded-2xl p-5 shadow-sm mt-5 flex justify-between ${
              index === listData.length - 1 ? "mb-32" : ""
            }`}
          >
            <View className="flex-row justify-between">
              <Text className="font-bold text-emerald-500 text-base">
                {item.distance}
              </Text>

              <Text className="font-bold text-emerald-500 text-base">
                {item.time}
              </Text>
            </View>
            <View className="flex justify-between flex-1">
              <Text className="font-bold text-emerald-500 text-base">
                {item.items}
              </Text>
              <Text className="text-base text-gray-500">{item.address}</Text>
              <View className="flex-row items-end justify-between">
                <TouchableOpacity className="bg-red-600 items-center rounded-full">
                  <FontAwesome5 name="times-circle" size={30} color="white" />
                </TouchableOpacity>
                <Text className="font-bold text-emerald-600 text-base">
                  {item.price}
                </Text>

                <TouchableOpacity className="bg-green-400 items-center rounded-full">
                  <FontAwesome5 name="check-circle" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity className="m-5 py-4 bg-emerald-700 rounded-3xl items-center absolute w-full bottom-5 z-10">
        <Text className="text-white font-semibold text-2xl">Go Online</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DriverDashboard;
