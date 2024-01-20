// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "run-dev-blog-409705.firebaseapp.com",
  projectId: "run-dev-blog-409705",
  storageBucket: "run-dev-blog-409705.appspot.com",
  messagingSenderId: "757958387062",
  appId: "1:757958387062:web:7888116388e4dd34ac4657"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);