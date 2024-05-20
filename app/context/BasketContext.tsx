import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { get, onValue, query, ref, set } from "firebase/database";
import { auth, db } from "@/firebase";
import { IItem } from "@/app/interfaces/IItem";

type BasketContextType = {
  addItem: (items: IItem) => {};
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within an BasketProvider");
  }
  return context;
};

type BasketProviderProps = {
  children: ReactNode;
};

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const addItem = async (newItem: IItem) => {
    setIsLoading(true);
    try {
      const basketRef = ref(db, "baskets/" + auth.currentUser?.uid);

      // Fetch existing basket items
      const snapshot = await get(basketRef);
      const basket = snapshot.val();
      const existingItems: IItem[] = basket?.items || [];

      // Check if the item already exists in the basket
      const existingItemIndex = existingItems.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        // Item exists, increment its quantity
        existingItems[existingItemIndex].quantity =
          (existingItems[existingItemIndex].quantity || 0) +
          (newItem.quantity || 1);
      } else {
        // Item does not exist, add it with the next id
        const nextId =
          existingItems.length > 0
            ? Math.max(...existingItems.map((item) => item.id || 0)) + 1
            : 1;
        newItem.id = nextId;
        newItem.quantity = 1;
        existingItems.push(newItem);
      }

      await set(basketRef, {
        uid: auth.currentUser?.uid,
        items: existingItems,
      });

      console.log("Item add to basket");
    } catch (error: any) {
      console.error("Error getting user data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BasketContext.Provider
      value={{
        addItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
