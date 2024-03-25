import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuthentication } from "@/app/services/useAuthentication";

const CreateAccount = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { createAccount } = useAuthentication();

  const handleCreateAccount = async () => {
    await createAccount(email, password);
  };

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
          onPress={handleCreateAccount}
          className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-white font-normal text-lg">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccount;
