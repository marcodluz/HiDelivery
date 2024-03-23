import * as React from "react";
import { Text, View } from "react-native";
import TextField from "@mui/material/TextField";

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
      <View className="w-full">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </View>
    </View>
  );
};

export default Login;
