import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ResetPassword from "@/app/screens/Public/ResetPassword/ResetPassword";
import ResetConfirmation from "@/app/screens/Public/ResetPassword/ResetConfirmation";
import CustomerNavigation from "@/app/screens/Customer/CustomerNavigation";
import GetStarted from "@/app/screens/Public/GetStarted/GetStarted";
import VerifyEmailCode from "@/app/screens/Public/CreateAccount/VerifyEmailCode";
import CreateAccount from "@/app/screens/Public/CreateAccount";
import Orders from "@/app/screens/Driver/Orders/Orders";
import ViewOrder from "@/app/screens/Driver/ViewOrder/ViewOrder";
import Welcome from "@/app/screens/Public/Welcome/Welcome";
import Login from "@/app/screens/Public/Login/Login";
import Home from "@/app/screens/Customer/Home/Home";
import SelectAddress from "@/app/screens/Customer/SelectAddress/SelectAddress";
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
