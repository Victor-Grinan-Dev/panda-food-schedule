// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPfRHijVUA90va_9nyFaTiEgxCbbpKLwE",
  authDomain: "panda-food-fedf4.firebaseapp.com",
  databaseURL:
    "https://panda-food-fedf4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "panda-food-fedf4",
  storageBucket: "panda-food-fedf4.appspot.com",
  messagingSenderId: "423792411270",
  appId: "1:423792411270:web:e88553b22f396712d60707",
  measurementId: "G-GQ9EEGZHGX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
