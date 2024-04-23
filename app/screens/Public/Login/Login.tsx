import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/app/context/AuthContext";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { userSignIn } = useAuth();

  const handleSignIn = async () => {
    await userSignIn(email, password);
  };

  return (
    <View className="flex-1 items-center bg-white px-9">
      <View className="w-full">
        <Text className="text-3xl font-bold text-center mt-10 mb-5">
          Let’s get into to it
        </Text>
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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="border border-slate-200 px-4 py-5 mt-3 rounded-xl"
          placeholder="Password"
          keyboardType="default"
          inputMode="text"
          textContentType="newPassword"
          autoComplete="new-password"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={handleSignIn}
          className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-white font-normal text-lg">Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center mt-5"
          onPress={() => navigation.navigate("Reset Password")}
        >
          <Text className="text-black font-normal text-base">
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
      <View className="w-full my-8">
        <Text className="text-center">------------ or ------------</Text>
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
