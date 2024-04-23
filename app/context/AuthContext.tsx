import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
  sendEmailVerification,
  onAuthStateChanged,
} from "@firebase/auth";
import {
  ref,
  set,
  orderByChild,
  equalTo,
  limitToFirst,
  query,
  get,
} from "firebase/database";
import { auth, db } from "@/firebase";

type AuthContextType = {
  user: User | undefined;
  isLoading: boolean;
  createAccount: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {};
  userSignIn: (email: string, password: string) => {};
  userSignOut: () => {};
  userResetPassword: (email: string) => {};
  userDeleteAccount: () => {};
  isEmailInUse: (email: string) => {};
  sendEmailVerificationCode: (email: string) => {};
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
  const [user, setUser] = React.useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(undefined);
      }
    });
  }, [auth]);

  const createAccount = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    setIsLoading(true);
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = createdUser?.user?.uid; // Check for user and uid existence

      if (!uid) {
        // Handle error: User creation might have failed
        console.error("Error creating user!");
        return;
      }

      const userRef = ref(db, `users/${uid}`);
      await set(userRef, {
        email,
        uid,
        firstName,
        lastName,
      });

      console.log("User created successfully!", email);
    } catch (error: any) {
      console.error("Authentication error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const userSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!", auth.currentUser?.email);
    } catch (error: any) {
      console.error("Authentication error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const userSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      console.log("User logged out successfully!", auth.currentUser?.email);
    } catch (error: any) {
      console.error("Error signing out:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const userResetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully!", email);
    } catch (error: any) {
      console.error("Error sending password reset email:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const userDeleteAccount = async () => {
    setIsLoading(true);
    try {
      await user?.delete();
      console.log("User account deleted successfully!");
    } catch (error: any) {
      console.error("Error deleting user account:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isEmailInUse = async (email: string) => {
    setIsLoading(true);
    try {
      const userRef = query(
        ref(db, "users"),
        orderByChild("email"),
        equalTo(email),
        limitToFirst(1) // Limit to 1 document to improve efficiency
      );

      const snapshot = await get(userRef);
      console.log(snapshot.val() !== null);
      return snapshot.val() !== null;
    } catch (error: any) {
      console.error("Error checking email existence:", error.message);
      // Consider throwing a custom error for handling in the calling function
      return false; // Or return a default value indicating error
    } finally {
      setIsLoading(false);
    }
  };

  const sendEmailVerificationCode = async (email: string) => {
    setIsLoading(true);
    try {
      await sendEmailVerification(auth.currentUser!);
    } catch (error: any) {
      console.error("Error sending email verification code:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        createAccount,
        userSignIn,
        userSignOut,
        userResetPassword,
        userDeleteAccount,
        isEmailInUse,
        sendEmailVerificationCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
