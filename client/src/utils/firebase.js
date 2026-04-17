import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-a31c8.firebaseapp.com",
  projectId: "interviewiq-a31c8",
  storageBucket: "interviewiq-a31c8.firebasestorage.app",
  messagingSenderId: "468936425810",
  appId: "1:468936425810:web:aaa4be2cfeed090dc5fa8b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
