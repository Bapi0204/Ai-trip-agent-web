// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk2pZGgazlnJwYx9MfhZAYZA9O-3yQbrE",
  authDomain: "ai-travel-agent-3da2e.firebaseapp.com",
  projectId: "ai-travel-agent-3da2e",
  storageBucket: "ai-travel-agent-3da2e.firebasestorage.app",
  messagingSenderId: "967291743551",
  appId: "1:967291743551:web:74f8997cfc9ab54e79b78a",
  measurementId: "G-X15JHSB9JQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);