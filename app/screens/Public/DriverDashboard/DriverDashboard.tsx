import BackButton from "@/app/components/BackButton/BackButton";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const DriverDashboard = ({ navigation }: any) => {
  return (
    <View className="bg-white h-full px-5 pt-14">
      <View className="flex-row items-center">
        <BackButton navigation={navigation} />
        <Text className="text-lg font-bold text-center absolute w-full -z-10">
          Driver Dashboard
        </Text>
      </View>
      <TouchableOpacity className="bg-white w-full h-48 rounded-2xl p-5 shadow-sm mt-5">
        <View className="flex-row justify-between">
          <Text className="font-bold">1.3 miles</Text>
          <Text className="font-bold">3 items</Text>
          <Text className="font-bold">11:30AM-03:40PM</Text>
        </View>
        <Text>255 Disson Road, London, UK</Text>
        <Text className="">25£</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DriverDashboard;
