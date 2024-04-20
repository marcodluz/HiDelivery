import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "@/app/screens/Public/Welcome/Welcome";
import Login from "@/app/screens/Public/Login/Login";
import Home from "@/app/screens/Customer/Home/Home";
import SelectAddress from "@/app/screens/Customer/SelectAddress/SelectAddress";
import { AddressProvider } from "@/app/context/AddressContext";
import Orders from "@/app/screens/Driver/Orders/Orders";
import ViewOrder from "@/app/screens/Driver/ViewOrder/ViewOrder";
import { OrderProvider } from "@/app/context/OrderContext";
import CreateAccount from "@/app/screens/Public/CreateAccount/CreateAccount";
import { AuthProvider } from "@/app/context/AuthContext";
import ResetPassword from "@/app/screens/Public/ResetPassword/ResetPassword";
import ResetConfirmation from "@/app/screens/Public/ResetPassword/ResetConfirmation";
import CustomerNavigation from "@/app/screens/Customer/CustomerNavigation";
import GetStarted from "@/app/screens/Public/GetStarted/GetStarted";

export type RootStackParamList = {
  Welcome: undefined;
  "Get Started": undefined;
  Login: undefined;
  "Create Account": undefined;
  "Reset Password": undefined;
  "Reset Confirmation": undefined;
  Customer: undefined;
  Home: undefined;
  "Customer - Select Address": undefined;
  "Driver Dashboard": undefined;
  "Driver Dashboard - Order": undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
  // How to use this: https://stackoverflow.com/questions/68779417/navigation-navigatehome-showing-some-error-in-typescript
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
                headerShadowVisible: false,
              })}
            >
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ title: "Welcome" }}
              />
              <Stack.Screen
                name="Get Started"
                component={GetStarted}
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
                name="Login"
                component={Login}
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
                name="Create Account"
                component={CreateAccount}
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
                name="Reset Password"
                component={ResetPassword}
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
                name="Reset Confirmation"
                component={ResetConfirmation}
                options={{
                  title: "",
                  headerShown: true,
                  headerTintColor: "black",
                  headerStyle: {
                    backgroundColor: "white",
                  },
                }}
              />
              <Stack.Screen name="Customer" component={CustomerNavigation} />
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
