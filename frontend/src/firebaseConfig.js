import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJJPjDAoRAZhh2ZDl5TWR15F-6UsAgpkY",
    authDomain: "musicoach-ae5ea.firebaseapp.com",
    projectId: "musicoach-ae5ea",
    storageBucket: "musicoach-ae5ea.firebasestorage.app",
    messagingSenderId: "82293823250",
    appId: "1:82293823250:web:af11dc4c41aa33d6b285cb",
    measurementId: "G-SNLHYCKPFT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);