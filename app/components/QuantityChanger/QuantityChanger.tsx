import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface QuantityChangerProps {
  maxQuantity: number;
}

const QuantityChanger = (props: QuantityChangerProps) => {
  const [quantity, setQuantity] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(1);

  useEffect(() => {
    setMaxQuantity(props.maxQuantity);
  }, []);

  const handleMinusPress = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const handlePlusPress = () => {
    setQuantity(Math.min(quantity + 1, maxQuantity));
  };

  return (
    <View className="flex-row bg-gray-100 rounded-full w-2/3 justify-between items-center">
      <TouchableOpacity
        className="bg-rose-600 w-10 h-10 rounded-tl-3xl rounded-bl-3xl rounded-tr-lg rounded-br-lg justify-center items-center"
        onPress={handleMinusPress}
      >
        <FontAwesome5 name="minus" size={18} color="white" />
      </TouchableOpacity>
      <Text className="font-bold text-xl">
        {quantity}/{maxQuantity}
      </Text>
      <TouchableOpacity
        className="bg-rose-600 w-10 h-10 rounded-tr-3xl rounded-br-3xl rounded-tl-lg rounded-bl-lg justify-center items-center"
        onPress={handlePlusPress}
      >
        <FontAwesome5 name="plus" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityChanger;
