import {
  getDatabase,
  ref,
  query,
  orderByChild,
  onValue,
} from "firebase/database";
import { useEffect, useState } from "react";
import { IItem } from "../interfaces/IItem";

export const useItems = () => {
  const [itemsList, setItemsList] = useState<IItem[]>([]); // Explicitly type itemsList as an array of Item

  useEffect(() => {
    const itemRef = ref(getDatabase(), "item/");

    const unsubscribe = onValue(itemRef, (snapshot) => {
      const data = snapshot.val() || {};
      const itemsWithId = Object.entries(data).map(([key, value]) => ({
        ...(value as IItem), // Cast value to Item type
        id: key,
      }));
      setItemsList(itemsWithId);
    });

    return () => unsubscribe();
  }, []);

  return itemsList;
};
