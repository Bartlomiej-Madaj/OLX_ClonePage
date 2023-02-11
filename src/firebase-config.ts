import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "olx-clone-7fa4b.firebaseapp.com",
  databaseURL:
    "https://olx-clone-7fa4b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "olx-clone-7fa4b",
  storageBucket: "olx-clone-7fa4b.appspot.com",
  messagingSenderId: "352869586044",
  appId: import.meta.env.VITE_APP_API_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
