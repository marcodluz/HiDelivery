import React, { createContext, useContext, useState, ReactNode } from "react";
import { IOrder } from "../interfaces/IOrder";

type OrderContextType = {
  order: IOrder | null;
  setOrder: (order: IOrder | null) => void;
  accepted: boolean;
  setAccepted: (address: boolean) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};

type OrderProviderProps = {
  children: ReactNode;
};

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<IOrder | null>(null);
  const [accepted, setAccepted] = useState<boolean>(false);

  return (
    <OrderContext.Provider value={{ order, setOrder, accepted, setAccepted }}>
      {children}
    </OrderContext.Provider>
  );
};
