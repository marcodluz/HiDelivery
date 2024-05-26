import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { get, onValue, push, query, ref, set } from "firebase/database";
import { auth, db } from "@/firebase";
import { IItem } from "@/app/interfaces/IItem";

type BasketContextType = {
  addItem: (itemId: string) => Promise<void>;
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

  const addItem = async (itemId: string) => {
    if (!itemId) {
      console.error("Item ID must be provided");
      return;
    }

    setIsLoading(true);
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        throw new Error("User not authenticated");
      }

      // Fetch the item from the original items collection
      const itemRef = ref(db, `item/${itemId}`);
      const itemSnapshot = await get(itemRef);
      if (!itemSnapshot.exists()) {
        throw new Error("Item not found in the original collection");
      }

      const newItem: IItem = itemSnapshot.val();

      const basketRef = ref(db, `baskets/${userId}`);
      const snapshot = await get(basketRef);
      const basket = snapshot.val();
      const existingItems: Record<string, IItem> = basket?.items || {};

      // Check if the item already exists in the basket by its ID
      if (existingItems[itemId]) {
        // Item exists, increment its quantity
        existingItems[itemId].quantity =
          (existingItems[itemId].quantity || 0) + (newItem.quantity || 1);
      } else {
        // Item does not exist, add it with its existing ID
        existingItems[itemId] = { ...newItem, quantity: 1 };
      }

      await set(basketRef, {
        uid: userId,
        items: existingItems,
      });

      console.log("Item added to basket:", newItem);
    } catch (error: any) {
      console.error("Error adding item to basket:", error.message);
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
