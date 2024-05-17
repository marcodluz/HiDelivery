import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "@/app/context/AuthContext";
import TextField from "@/app/components/ui/inputs/textField/TextField";

const VerifyEmailCode = () => {
  const [email, setEmail] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { user } = useAuth();

  return (
    <View className="flex-1 items-center bg-white px-9">
      <Text className="text-3xl font-bold text-center mt-10 mb-5">
        Enter your code
      </Text>
      <View className="w-full mb-5">
        <TextField
          value={email}
          maxLength={254}
          placeholder="Code"
          keyboardType="email-address"
          inputMode="email"
          textContentType="emailAddress"
          autoComplete="email"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="none"
          errorMessage={errorMessage}
          onChange={(value) => {
            setEmail(value);
            setErrorMessage(""); // Clear error on change
          }}
        />
        <TouchableOpacity className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center">
          <Text className="text-white font-normal text-lg">Verify Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyEmailCode;
