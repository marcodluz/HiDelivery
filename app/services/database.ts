import { useState } from "react";
import {
  child,
  push,
  ref,
  set,
  update,
  onValue,
  remove,
  endAt,
  orderByChild,
  query,
  startAt,
  get,
} from "firebase/database";
import { db } from "@/firebase";
import { IOrder } from "@/app/interfaces/IOrder";

interface OrderData extends IOrder {
  [key: string]: any; // Allow any property name
}

export function createOrder(createData: OrderData) {
  const randomUniqueKey = push(child(ref(db), "order")).key;
  const orderRef = ref(db, "order/" + randomUniqueKey);

  set(orderRef, createData)
    .then(() => {
      alert("Data submitted");
    })
    .catch((error) => {
      alert(error);
    });
}

export function updateOrder(orderID: string, updateData: OrderData) {
  const orderRef = ref(db, "order/" + orderID);

  update(orderRef, updateData)
    .then(() => {
      alert("Data updated");
    })
    .catch((error) => {
      alert(error);
    });
}

export function getOrder(orderID: string) {
  const orderRef = ref(db, "order/" + orderID);

  onValue(orderRef, (snapshot) => {
    const data = snapshot.val();
    return data;
  });
}

export function deleteOrder(orderID: string) {
  const orderRef = ref(db, "order/" + orderID);

  remove(orderRef)
    .then(() => {
      alert("Data deleted");
    })
    .catch((error) => {
      alert(error);
    });
}

export function getListOrders(startTime: number, endTime: number) {
  const orderRef = query(
    ref(db, "order/"),
    orderByChild("orderTime"),
    startAt(startTime),
    endAt(endTime)
  );

  onValue(orderRef, (snapshot) => {
    const data = snapshot.val() || [];
    const ordersList = Object.values(data);
    console.log(ordersList);
    return ordersList;
  });
}
