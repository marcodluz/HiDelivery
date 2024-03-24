import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = React.useState("");

  return (
    <View className="flex-1 items-center bg-white px-9">
      <View className="w-full justify-between pt-16">
        <View>
          <Text className="text-4xl font-bold">Let's get into to it.</Text>
          <Text className="text-4xl font-normal">
            Welcome back.{"\n"}You've been missed!
          </Text>
        </View>
      </View>
      <View className="w-full mt-14 mb-5">
        <TextInput
          className="border border-slate-200 px-4 py-5 rounded-xl"
          placeholder="Email Address"
          keyboardType="email-address"
          inputMode="email"
          textContentType="emailAddress"
          autoComplete="email"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="none"
          maxLength={254}
        />
        <TouchableOpacity
          onPress={() => {}}
          className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-white font-normal text-lg">Continue</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full gap-y-3">
        <TouchableOpacity
          onPress={() => {}}
          className="h-14 bg-slate-300 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-black font-normal text-lg">
            <FontAwesome6 name="apple" size={20} color="black" />
            {"  "}
            Continue with Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          className="h-14 bg-slate-300 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-black font-normal text-lg">
            <FontAwesome6 name="google" size={18} color="black" />
            {"  "}
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          className="h-14 bg-slate-300 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-black font-normal text-lg">
            <FontAwesome6 name="facebook" size={18} color="black" />
            {"  "}
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
