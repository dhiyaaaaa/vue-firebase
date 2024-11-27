// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQAI28KSXjKkk0E5lNgFt5Jtc9-D7VgOU",
  authDomain: "vue-firebase-65a65.firebaseapp.com",
  projectId: "vue-firebase-65a65",
  storageBucket: "vue-firebase-65a65.firebasestorage.app",
  messagingSenderId: "520277288192",
  appId: "1:520277288192:web:d1727fa2d5c85d187bffe5"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

const db = getFirestore(firebase);

export { auth, googleProvider, db };
