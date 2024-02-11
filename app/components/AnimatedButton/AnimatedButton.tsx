import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface AnimatedButtonProps {
  label: string;
  onPress: () => void;
  width: number;
  orderTime: number;
  accepted: boolean;
}

const AnimatedButton = (props: AnimatedButtonProps) => {
  const animation = useRef(new Animated.Value(0)).current; // Initial width of the colored fill
  const buttonWidth = props.width; // Define the width of the button in pixels

  useEffect(() => {
    const now = Date.now();
    const endTime = props.orderTime + 30 * 1000; // 30 seconds from orderTime
    const timeLeft = Math.max(endTime - now, 0);

    if (props.accepted || timeLeft == 0) {
      // If the action is accepted or the elapsed time exceeds the duration, fill the button
      animation.setValue(buttonWidth);
    } else {
      const totalTime = 30 * 1000; // Total animation duration is 30 seconds
      const elapsedTime = totalTime - timeLeft; // Calculate elapsed time
      const initialWidth = (elapsedTime / totalTime) * buttonWidth; // Calculate initial width based on elapsed time
      animation.setValue(initialWidth);

      // Start the animation from the calculated initial width to full width
      Animated.timing(animation, {
        toValue: buttonWidth,
        duration: timeLeft, // Adjust the duration based on the remaining time
        useNativeDriver: false,
      }).start();
    }
  }, [buttonWidth, animation, props.accepted]);

  const handlePress = () => {
    Animated.timing(animation, {
      toValue: buttonWidth,
      duration: 500, // A short duration to immediately fill the button on press
      useNativeDriver: false,
    }).start(() => {
      props.onPress();
    });
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        className={`h-14 mt-5 bg-sky-800 rounded-full items-center w-full w-${
          buttonWidth / 4
        } overflow-hidden justify-center`}
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
