import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6 } from "@expo/vector-icons";
import Home from "@/app/screens/customer/home/Home";
import Basket from "@/app/screens/customer/basket/Basket";
import Account from "@/app/screens/customer/account";
import Rewards from "@/app/screens/customer/rewards/Rewards";
import Orders from "@/app/screens/customer/orders/Orders";

const Tab = createBottomTabNavigator();

function CustomerNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="house" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="gift" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="basket-shopping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user" color={color} size={size} />
          ),
          title: "Account",
        }}
      />
    </Tab.Navigator>
  );
}

export default CustomerNavigation;
