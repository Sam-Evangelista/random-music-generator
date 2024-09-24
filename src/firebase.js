// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlZN7Zr3_oNY_ZkNXwOHso-flIBH7y_sk",
  authDomain: "random-music-generator-69e38.firebaseapp.com",
  projectId: "random-music-generator-69e38",
  storageBucket: "random-music-generator-69e38.appspot.com",
  messagingSenderId: "914411872427",
  appId: "1:914411872427:web:33113dbc79f8595ce997ee",
  measurementId: "G-LG2BGN6HL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);