import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const persistence = getReactNativePersistence(AsyncStorage);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime database
export const db = getDatabase(app);

// Initialize Firebase Authentication
export const auth = initializeAuth(app, {
  persistence,
});
