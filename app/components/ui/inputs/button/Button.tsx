import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: any;
  colour?: any;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <TouchableOpacity
        className={`h-14 mt-5 ${
          props.colour ? props.colour : "bg-slate-700"
        } rounded-xl items-center w-full overflow-hidden justify-center`}
        onPress={props.onClick}
      >
        <Text className="text-white font-medium text-xl">
          <FontAwesome5 name={props.icon} size={22} color="white" />
          {props.children}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
