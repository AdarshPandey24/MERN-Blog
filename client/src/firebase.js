// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-24.firebaseapp.com",
  projectId: "mern-blog-24",
  storageBucket: "mern-blog-24.appspot.com",
  messagingSenderId: "588412041613",
  appId: "1:588412041613:web:8622e7129a5258304d65c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);