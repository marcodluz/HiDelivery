import React from "react";
import { AddressProvider } from "@/app/context/AddressContext";
import { OrderProvider } from "@/app/context/OrderContext";
import { AuthProvider } from "@/app/context/AuthContext";

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
