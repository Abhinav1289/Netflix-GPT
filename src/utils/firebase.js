// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzHI_fVeDTbiacMmOEqXhF5bNWMJ1pL0g",
  authDomain: "netflixgpt-c4603.firebaseapp.com",
  projectId: "netflixgpt-c4603",
  storageBucket: "netflixgpt-c4603.appspot.com",
  messagingSenderId: "825965445725",
  appId: "1:825965445725:web:0f251b138319a92e47c3b4",
  measurementId: "G-Z9HZNN3VDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();