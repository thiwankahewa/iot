import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGbG5mypHsC36spPFDaZj6yvBI9u_rx-o",
  authDomain: "fyp-web-app-6f954.firebaseapp.com",
  projectId: "fyp-web-app-6f954",
  storageBucket: "fyp-web-app-6f954.appspot.com",
  messagingSenderId: "678369921155",
  appId: "1:678369921155:web:c0f6ad96fe6f78d43833b6",
  measurementId: "G-96ZYLXS22V",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
