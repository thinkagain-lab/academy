// lib/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDTBRYl-Sa5nI8_-MM7CoE8Zf7YljrZkcA",
  authDomain: "landing-page-a411d.firebaseapp.com",
  projectId: "landing-page-a411d",
  storageBucket: "landing-page-a411d.firebasestorage.app",
  messagingSenderId: "154209980121",
  appId: "1:154209980121:web:bcc8e932c349004958f8c8",
  measurementId: "G-DTLLVSD836"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };