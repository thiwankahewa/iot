import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGbG5mypHsC36spPFDaZj6yvBI9u_rx-o",
  authDomain: "fyp-web-app-6f954.firebaseapp.com",
  projectId: "fyp-web-app-6f954",
  storageBucket: "fyp-web-app-6f954.appspot.com",
  messagingSenderId: "678369921155",
  appId: "1:678369921155:web:c0f6ad96fe6f78d43833b6",
  measurementId: "G-96ZYLXS22V",
  databaseURL:
    "https://fyp-web-app-6f954-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export default app;
