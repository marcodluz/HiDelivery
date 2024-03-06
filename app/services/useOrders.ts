import {
  getDatabase,
  ref,
  query,
  orderByChild,
  onValue,
} from "firebase/database"; // Import Firebase functions (adjust for your version)
import { useEffect, useState } from "react";

export const useOrders = (startTime: number, endTime: number) => {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const orderRef = query(
      ref(getDatabase(), "order/"),
      orderByChild("orderTime")
      // Add startAt and endAt if filtering by time range is needed
      /* startAt(startTime),
        endAt(endTime) */
    );

    const unsubscribe = onValue(orderRef, (snapshot) => {
      const data = snapshot.val() || [];
      setOrdersList(Object.values(data));
    });

    return () => unsubscribe(); // Cleanup function to detach listener on unmount
  }, []); // Update on changes to startTime or endTime

  return ordersList;
};
