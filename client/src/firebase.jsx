// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3d8be.firebaseapp.com",
  projectId: "mern-estate-3d8be",
  storageBucket: "mern-estate-3d8be.appspot.com",
  messagingSenderId: "1061108568621",
  appId: "1:1061108568621:web:bd91492ea08fcd3e65dea4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
