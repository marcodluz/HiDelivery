import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface AnimatedButtonProps {
  label: string;
  onPress: () => void;
  width: number;
}

const AnimatedButton = (props: AnimatedButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const animation = useRef(new Animated.Value(0)).current; // Initial width of the colored fill
  const buttonWidth = props.width; // Define the width of the button in pixels
  const fillDuration = 30 * 1000; // Duration of the fill animation in milliseconds

  useEffect(() => {
    Animated.timing(animation, {
      toValue: buttonWidth,
      duration: fillDuration,
      useNativeDriver: false,
    }).start();
  }, []);

  const handlePress = () => {
    setIsPressed(true);
    animation.setValue(350);
    props.onPress();
  };
  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        className={`h-14 mt-5 bg-sky-800 rounded-full items-center w-full w-${
          buttonWidth / 4
        } overflow-hidden justify-center items-center`}
      >
        <Animated.View
          className="bg-sky-600 h-full absolute left-0 top-0"
          style={{ width: animation }}
        />
        <Text className="text-white font-semibold text-2xl">
          <FontAwesome5 name="shipping-fast" size={22} color="white" />
          {"  "}
          {props.label}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default AnimatedButton;
