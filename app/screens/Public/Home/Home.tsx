import React from "react";
import { Button, Text } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <>
      <Text>Welcome to HiDelivery</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </>
  );
};

export default Home;
