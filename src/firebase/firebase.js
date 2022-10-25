// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzOa7ogRJWFUCgm95V-XthiYCmQhwVi3c",
  authDomain: "ada-academy.firebaseapp.com",
  projectId: "ada-academy",
  storageBucket: "ada-academy.appspot.com",
  messagingSenderId: "735084031778",
  appId: "1:735084031778:web:c7ed0d5886b3acdb037f7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;