import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { IItem } from "@/app/interfaces/IItem";
import { auth, db } from "@/firebase";

export const useBasketItems = () => {
  const [basketItems, setBasketItems] = useState<IItem[]>([]);

  useEffect(() => {
    const basketRef = ref(db, "baskets/" + auth.currentUser?.uid);

    const unsubscribe = onValue(basketRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.items) {
        setBasketItems(data.items); // Set the items array to the state
      } else {
        setBasketItems([]); // If no items found, set an empty array
      }
    });

    return () => unsubscribe(); // Cleanup function to detach listener on unmount
  }, []);

  return basketItems;
};
