import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./Account";
import Privacy from "./Privacy";
import Manage from "./Manage";

const Stack = createNativeStackNavigator();

function CustomerNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={"Account"}
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        headerBackVisible: true,
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTintColor: "black",
      })}
    >
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Manage Account"
        component={Manage}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{ headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}

export default CustomerNavigation;
