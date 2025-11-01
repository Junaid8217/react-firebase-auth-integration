// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAaGwnobSCAKfKs_H53o15999bOVA32Us",
  authDomain: "react-fire-auth-integrat-1a2e3.firebaseapp.com",
  projectId: "react-fire-auth-integrat-1a2e3",
  storageBucket: "react-fire-auth-integrat-1a2e3.firebasestorage.app",
  messagingSenderId: "528231117481",
  appId: "1:528231117481:web:4dd7e687b3971d962defb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);