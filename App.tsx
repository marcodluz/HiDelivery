import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/app/screens/Public/Home/Home";
import Login from "@/app/screens/Auth/Login/Login";
import Products from "@/app/screens/Public/SelectAddress/SelectAddress";
import { AddressProvider } from "@/app/context/AddressContext";
import Orders from "@/app/screens/Public/DriverDashboard/Orders/Orders";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AddressProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route, navigation }) => ({
            headerShown: false,
            gestureEnabled: true,
          })}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Products"
            component={Products}
            options={{ title: "Products" }}
          />
          <Stack.Screen
            name="Driver Dashboard"
            component={Orders}
            options={{
              title: "Orders",
              headerShown: true,
              headerTitleStyle: { color: "#fff" },
              headerStyle: { backgroundColor: "#0c4a6e" },
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AddressProvider>
  );
};

export default App;
