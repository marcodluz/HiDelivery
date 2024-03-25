import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { auth } from "@/firebase";
import { useNavigation } from "@react-navigation/native";

export const useAuthentication = () => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const createAccount = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully!");
    } catch (error: any) {
      console.error("Authentication error:", error.message);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!");
      navigation.navigate("Home");
    } catch (error: any) {
      console.error("Authentication error:", error.message);
    }
  };

  const signOut = async () => {
    try {
      await signOut();
      console.log("User logged out successfully!");
    } catch (error: any) {
      console.error("Error signing out:", error.message);
    }
  };

  return { user, createAccount, signIn, signOut };
};
