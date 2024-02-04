import React from "react";
import { View, Text, TouchableOpacity, FlatList, Linking } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AnimatedButton from "@/app/components/AnimatedButton/AnimatedButton";

const DriverDashboard = ({ navigation }: any) => {
  const listData = [
    {
      id: "1",
      distance: "18.3",
      items: "5",
      time: "02:05",
      price: "25.89",
    },
    {
      id: "2",
      distance: "5.1",
      items: "2",
      time: "03:30",
      price: "15.89",
    },
    {
      id: "3",
      distance: "3.5",
      items: "7",
      time: "01:40",
      price: "18.69",
    },
  ];

  const openInWaze = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://waze.com/ul?q=${encodedAddress}&navigate=yes`;

    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <View className="bg-gray-100 h-full">
      <View className="h-48 w-full absolute top-0 bg-sky-700"></View>
      <View className="px-5">
        <FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className={`bg-white w-full rounded-2xl p-5 shadow-sm mt-5 flex justify-between ${
                index === listData.length - 1 ? "mb-32" : ""
              }`}
            >
              <View className="flex-row gap-3 h-32">
                <View className="justify-around">
                  <FontAwesome5 name="map-marker-alt" size={18} color="black" />
                  <FontAwesome5 name="shopping-bag" size={18} color="black" />
                  <FontAwesome5 name="bullhorn" size={18} color="black" />
                </View>
                <View className="justify-around">
                  <Text className="text-lg">
                    <Text className="font-bold">{item.distance} mi</Text> (until{" "}
                    {item.time})
                  </Text>
                  <Text className="font-bold text-lg">{item.items} items</Text>
                  <Text className="font-bold text-lg">
                    Global Announcement{" "}
                    <Text className="font-normal text-gray-500">0:19</Text>
                  </Text>
                </View>
              </View>
              <View className="border-b border-gray-300 my-5"></View>
              <View className="flex items-center">
                <Text className="font-bold text-3xl">{item.price}£</Text>
                <Text className="text-gray-500 text-base">
                  Including Night Bonus
                </Text>
                {/* <TouchableOpacity className="mt-5 py-4 bg-sky-800 rounded-full items-center w-full">
                  <Text className="text-white font-semibold text-2xl">
                    <FontAwesome5
                      name="shipping-fast"
                      size={22}
                      color="white"
                    />
                    {"  "}
                    Accept Delivery
                  </Text>
                </TouchableOpacity> */}
                <AnimatedButton
                  label={"Accept Delivery"}
                  width={350}
                  onPress={() => {
                    console.log("Button Pressed with order ID: " + item.id);
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        {/* <TouchableOpacity
        onPress={() => openInWaze("255 Derby Road, Loughborough, LE115HJ, UK")}
      >
        <Text>Open in Waze</Text>
      </TouchableOpacity> */}
        {/* <TouchableOpacity className="m-5 py-4 bg-emerald-700 rounded-3xl items-center absolute w-full bottom-5 z-10">
        <Text className="text-white font-semibold text-2xl">Go Online</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default DriverDashboard;
