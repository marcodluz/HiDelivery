import React from "react";
import { AddressProvider } from "@/app/context/AddressContext";
import { OrderProvider } from "@/app/context/OrderContext";
import { AuthProvider } from "@/app/context/AuthContext";

import "react-native-reanimated"; // Fix for crashing SDK 51

import Navigation from "@/app/Navigation";

const App = () => {
  return (
    <AuthProvider>
      <OrderProvider>
        <AddressProvider>
          <Navigation />
        </AddressProvider>
      </OrderProvider>
    </AuthProvider>
  );
};

export default App;
