import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { auth } from "@/firebase";
import { useNavigation } from "@react-navigation/native";

type AuthContextType = {
  user: any;
  isLoading: boolean;
  createAccount: (email: string, password: string) => {};
  userSignIn: (email: string, password: string) => {};
  userSignOut: () => {};
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState("");
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const syncUserState = onAuthStateChanged(auth, (user: any) => {
      setUser(user);

      if (!user) {
        navigation.navigate("Welcome");
      }
    });

    return () => syncUserState();
  }, [auth]);

  const createAccount = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully!");
    } catch (error: any) {
      console.error("Authentication error:", error.message);
    }
  };

  const userSignIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!");
      navigation.navigate("Home");
    } catch (error: any) {
      console.error("Authentication error:", error.message);
    }
  };

  const userSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      navigation.navigate("Welcome");
    } catch (error: any) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, createAccount, userSignIn, userSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
