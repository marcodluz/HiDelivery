import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "@/app/screens/Public/Welcome/Welcome";
import Login from "@/app/screens/Auth/Login/Login";
import SelectAddress from "@/app/screens/Public/SelectAddress/SelectAddress";
import { AddressProvider } from "@/app/context/AddressContext";
import Orders from "@/app/screens/Public/DriverDashboard/Orders";
import ViewOrder from "@/app/screens/Public/DriverDashboard/ViewOrder";
import { OrderProvider } from "./app/context/OrderContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <OrderProvider>
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
              name="Welcome"
              component={Welcome}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="Customer - Select Address"
              component={SelectAddress}
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="Driver Dashboard"
              component={Orders}
              options={{
                title: "",
                headerShown: true,
                headerTintColor: "black",
                headerStyle: {
                  backgroundColor: "white",
                },
              }}
            />
            <Stack.Screen
              name="Driver Dashboard - Order"
              component={ViewOrder}
              options={{
                title: "",
                headerShown: true,
                headerTintColor: "black",
                headerStyle: {
                  backgroundColor: "white",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AddressProvider>
    </OrderProvider>
  );
};

export default App;
