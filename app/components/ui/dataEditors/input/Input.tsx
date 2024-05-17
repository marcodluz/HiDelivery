import React, { Dispatch, SetStateAction } from "react";
import { Text, TextInput } from "react-native";

interface InputProps {
  value?: string;
  maxLength?: number;
  placeholder?: any;
  keyboardType?: any;
  inputMode?: any;
  textContentType?: any;
  autoComplete?: any;
  clearButtonMode?: any;
  returnKeyType?: any;
  autoCapitalize?: any;
  errorMessage?: string;
  onChange?: Dispatch<SetStateAction<string>>;
  label?: any;
}

const Input = (props: InputProps) => {
  return (
    <>
      {props.label && (
        <Text className="absolute ml-4 mt-3 text-gray-400 text-xs">
          {props.label}
        </Text>
      )}

      <TextInput
        className={`border border-slate-200 px-4 rounded-xl ${
          props.errorMessage && "border-red-500"
        } ${props.label ? "pt-7 pb-3" : "py-5"}`}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        inputMode={props.inputMode}
        textContentType={props.textContentType}
        autoComplete={props.autoComplete}
        clearButtonMode={props.clearButtonMode}
        returnKeyType={props.returnKeyType}
        autoCapitalize={props.autoCapitalize}
        maxLength={props.maxLength}
        value={props.value}
        onChangeText={props.onChange}
      />
      {props.errorMessage && (
        <Text className="text-red-500 text-sm mt-2">{props.errorMessage}</Text>
      )}
    </>
  );
};

export default Input;
