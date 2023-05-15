// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtF34KvdiZjn7hd0us8Z7mKZNKoD3pbTc",
  authDomain: "social-network-mobile-app.firebaseapp.com",
  projectId: "social-network-mobile-app",
  storageBucket: "social-network-mobile-app.appspot.com",
  messagingSenderId: "233060023026",
  appId: "1:233060023026:web:bfb2405a81adedcff9ee6b",
  measurementId: "G-8Z90GCS1FD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);