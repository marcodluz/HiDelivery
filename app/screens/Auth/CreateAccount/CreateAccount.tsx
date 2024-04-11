import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "@/app/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";

const CreateAccount = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { createAccount, user } = useAuth();

  React.useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    } else {
      if (!user && navigation.canGoBack()) {
        navigation.setOptions({
          headerLeft: () => (
            <FontAwesome6
              name="chevron-left"
              size={22}
              color="black"
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          ),
        });
      }
    }
  }, []);

  const handleCreateAccount = async () => {
    await createAccount(email, password);
  };

  return (
    <View className="flex-1 items-center bg-white px-9">
      <View className="w-full justify-between pt-16">
        <View>
          <Text className="text-4xl font-bold">Welcome new face.</Text>
          <Text className="text-3xl font-normal">
            Already craving?{"\n"}You won't regret it!
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
