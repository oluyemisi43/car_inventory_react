// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD4TM730rnvP0FNHEDs82ddr1CLP_nRcH0",
  authDomain: "react-car-inventory-bc41c.firebaseapp.com",
  projectId: "react-car-inventory-bc41c",
  storageBucket: "react-car-inventory-bc41c.appspot.com",
  messagingSenderId: "825404580091",
  appId: "1:825404580091:web:882eb5ab6766f87c2b505e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);