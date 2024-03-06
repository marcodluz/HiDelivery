import { useState } from "react";
import { child, push, ref, set, update, onValue } from "firebase/database";
import { db } from "@/firebase";

export function createOrder() {
  const newOrderID = push(child(ref(db), "order")).key;
  const name = "test";

  set(ref(db, "order/" + newOrderID), {
    name: name,
  })
    .then(() => {
      alert("Data submitted");
    })
    .catch((error) => {
      alert(error);
    });
}

interface OrderUpdateData {
  [key: string]: any; // Allow any property name
  name?: string; // Specify optional name property
}

export function updateOrder(orderID: string, updateData: OrderUpdateData) {
  update(ref(db, "order/" + orderID), updateData)
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
    console.log("Order Name: " + data.name);
  });
}
