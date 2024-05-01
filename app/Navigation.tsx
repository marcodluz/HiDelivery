import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ResetPassword from "@/app/screens/public/resetPassword/ResetPassword";
import ResetConfirmation from "@/app/screens/public/resetPassword/ResetConfirmation";
import CustomerNavigation from "@/app/screens/customer/CustomerNavigation";
import GetStarted from "@/app/screens/public/getStarted/GetStarted";
import VerifyEmailCode from "@/app/screens/public/createAccount/VerifyEmailCode";
import CreateAccount from "@/app/screens/public/createAccount";
import Orders from "@/app/screens/driver/orders/Orders";
import ViewOrder from "@/app/screens/driver/viewOrder/ViewOrder";
import Welcome from "@/app/screens/public/welcome/Welcome";
import Login from "@/app/screens/public/login/Login";
import Home from "@/app/screens/customer/home/Home";
import SelectAddress from "@/app/screens/customer/selectAddress/SelectAddress";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {!useAuth().user ? (
        <Stack.Navigator
          initialRouteName={"Welcome"}
          screenOptions={({ route, navigation }) => ({
            headerShown: false,
            gestureEnabled: false,
            headerBackVisible: true,
            headerBackTitleVisible: false,
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
            name="CreateAccount"
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
            name="VerifyEmailCode"
            component={VerifyEmailCode}
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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={"Customer"}
          screenOptions={({ route, navigation }) => ({
            headerShown: false,
            gestureEnabled: false,
            headerBackVisible: true,
            headerBackTitleVisible: false,
            headerShadowVisible: false,
          })}
        >
          <Stack.Screen name="Customer" component={CustomerNavigation} />
          <Stack.Screen name="Home" component={Home} />
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
              gestureEnabled: true,
              headerBackVisible: true,
              headerBackTitleVisible: false,
              headerShadowVisible: false,
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
              gestureEnabled: true,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
