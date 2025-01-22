import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
    return await signOut(auth);
};
