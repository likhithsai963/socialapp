// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqebzpd9ZgyzPY6QOCySLpyOMGLeK7O7Q",
  authDomain: "socialapp-ab16d.firebaseapp.com",
  projectId: "socialapp-ab16d",
  storageBucket: "socialapp-ab16d.firebasestorage.app",
  messagingSenderId: "429261956369",
  appId: "1:429261956369:web:2b005b5d4f63e1af99d8b0",
  measurementId: "G-7P7HNTHKK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)

export {auth,provider,db,storage};