import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "@/app/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { userResetPassword, user } = useAuth();

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

  const handlePasswordReset = async () => {
    await userResetPassword(email);
    navigation.navigate("Reset Confirmation");
  };

  return (
    <View className="flex-1 items-center bg-white px-9">
      <View className="w-full justify-between pt-16">
        <View>
          <Text className="text-4xl font-bold">What password?</Text>
          <Text className="text-3xl font-normal">
            No worries.{"\n"}We can fix that!
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
          returnKeyType="done"
          autoCapitalize="none"
          maxLength={254}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          onPress={handlePasswordReset}
          className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-white font-normal text-lg">Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
