import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View className="flex-1 justify-between items-center bg-white">
      <View className="w-full items-center justify-center h-1/2 bg-green-100">
        <Image className="w-64 h-64" source={require("@/assets/package.png")} />
      </View>
      <View className="h-1/2 p-9 w-full justify-between pt-16">
        <View>
          <Text className="text-4xl font-medium mb-5">
            Welcome to {"\n"}HiDelivery
          </Text>
          <Text className="text-xl font-medium">
            Our task is to deliver to you as quickly as possible at any time of
            the day
          </Text>
        </View>

        <TouchableOpacity
          className="py-7 bg-green-500 rounded-3xl items-center"
          onPress={() => navigation.navigate("Products")}
        >
          <Text className="text-white font-semibold text-2xl">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
