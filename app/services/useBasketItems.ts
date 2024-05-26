import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase";

export const useBasketItems = () => {
  const [basketItemIds, setBasketItemIds] = useState<string[]>([]);

  useEffect(() => {
    const basketRef = ref(db, "baskets/" + auth.currentUser?.uid);

    const unsubscribe = onValue(basketRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.items) {
        const itemIds = Object.keys(data.items); // Extract item IDs from the items object
        setBasketItemIds(itemIds); // Set the array of item IDs to the state
      } else {
        setBasketItemIds([]); // If no items found, set an empty array
      }
    });

    return () => unsubscribe(); // Cleanup function to detach listener on unmount
  }, []);

  return basketItemIds;
};
