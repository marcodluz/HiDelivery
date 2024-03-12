import {
  getDatabase,
  ref,
  query,
  orderByChild,
  onValue,
} from "firebase/database";
import { useEffect, useState } from "react";

export const useItems = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const itemRef = query(ref(getDatabase(), "item/"), orderByChild("title"));

    const unsubscribe = onValue(itemRef, (snapshot) => {
      const data = snapshot.val() || [];
      setItemsList(Object.values(data));
    });

    return () => unsubscribe(); // Cleanup function to detach listener on unmount
  }, []);

  return itemsList;
};
