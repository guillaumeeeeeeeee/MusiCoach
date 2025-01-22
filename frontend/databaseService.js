import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addData = async (collectionName, data) => {
  return await addDoc(collection(db, collectionName), data);
};

export const getData = async (collectionName) => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};