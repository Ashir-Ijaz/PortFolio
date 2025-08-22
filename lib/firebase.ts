// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTnNTjqCCLNi1hzXT5DY42FnmFk7ODYI8",
  authDomain: "portfolio-3d745.firebaseapp.com",
  projectId: "portfolio-3d745",
  storageBucket: "ortfolio-3d745.firebasestorage.app",
  messagingSenderId: "978482590812",
  appId: "978482590812:web:2ec10004d2bd224280a299",
  measurementid: "G-K1E1Q6WX0J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
