// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVO-BYVe64dB1gvy18NBOmzM750fULP9U",
  authDomain: "hidelivery-prod.firebaseapp.com",
  databaseURL:
    "https://hidelivery-prod-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hidelivery-prod",
  storageBucket: "hidelivery-prod.appspot.com",
  messagingSenderId: "1079065180554",
  appId: "1:1079065180554:web:27f0ca75a7cf8d1c07b073",
  measurementId: "G-QJN1RKK4SJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime database
export const db = getDatabase(app);

export const auth = getAuth(app);
