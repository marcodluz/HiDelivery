import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const BackButton = ({ navigation }: any) => {
  return (
    <>
      <TouchableOpacity
        className="py-2 px-5 bg-rose-600 rounded-3xl items-center self-start"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white font-semibold text-2xl">
          <FontAwesome5 name="angle-left" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BackButton;
