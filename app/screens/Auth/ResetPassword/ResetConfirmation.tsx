import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "@/app/context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const ResetConfirmation = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { userResetPassword, user } = useAuth();

  React.useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    }
  }, []);

  return (
    <View className="flex-1 items-center bg-white px-9">
      <View className="w-full justify-between pt-16">
        <View>
          <Text className="text-4xl font-bold">Email sent your way.</Text>
          <Text className="text-3xl font-normal">
            Check the spam folder.{"\n"}We never know!
          </Text>
        </View>
      </View>
      <View className="w-full mt-14 mb-5">
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-white font-normal text-lg">
            Go back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetConfirmation;
