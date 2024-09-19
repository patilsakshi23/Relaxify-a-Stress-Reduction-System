// Import the functions you need from the SDKs you need
// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnRFuwOiaDZWkda0ewcULojZtlVQEkoUI",
  authDomain: "calmify-4c1ff.firebaseapp.com",
  databaseURL: "https://calmify-4c1ff-default-rtdb.firebaseio.com",
  projectId: "calmify-4c1ff",
  storageBucket: "calmify-4c1ff.appspot.com",
  messagingSenderId: "458639845546",
  appId: "1:458639845546:web:5b74cfdba2ccdd058408d3",
  measurementId: "G-RN2X8T1Q0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
export const database = getDatabase(app);