import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "@/app/screens/Customer/Welcome/Welcome";
import Login from "@/app/screens/Auth/Login/Login";
import Home from "@/app/screens/Customer/Home/Home";
import SelectAddress from "@/app/screens/Customer/SelectAddress/SelectAddress";
import { AddressProvider } from "@/app/context/AddressContext";
import Orders from "@/app/screens/Driver/Orders/Orders";
import ViewOrder from "@/app/screens/Driver/ViewOrder/ViewOrder";
import { OrderProvider } from "@/app/context/OrderContext";
import CreateAccount from "@/app/screens/Auth/CreateAccount/CreateAccount";
import { AuthProvider } from "@/app/context/AuthContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <OrderProvider>
      <AddressProvider>
        <NavigationContainer>
          <AuthProvider>
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={({ route, navigation }) => ({
                headerShown: false,
                gestureEnabled: false,
                headerBackVisible: false,
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
                options={{
                  title: "Login",
                  headerShown: true,
                  headerTintColor: "black",
                  headerStyle: {
                    backgroundColor: "white",
                  },
                }}
              />
              <Stack.Screen
                name="Create Account"
                component={CreateAccount}
                options={{
                  title: "Create Account",
                  headerShown: true,
                  headerTintColor: "black",
                  headerStyle: {
                    backgroundColor: "white",
                  },
                }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  title: "Home",
                  headerShown: true,
                  headerTintColor: "black",
                  headerStyle: {
                    backgroundColor: "white",
                  },
                }}
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
          </AuthProvider>
        </NavigationContainer>
      </AddressProvider>
    </OrderProvider>
  );
};

export default App;
