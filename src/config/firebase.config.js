import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAADa3ahM22S1Puu9gUG4KlciEGYyyGF0o",
  authDomain: "ferreya-e293d.firebaseapp.com",
  projectId: "ferreya-e293d",
  storageBucket: "ferreya-e293d.appspot.com",
  messagingSenderId: "600427048185",
  appId: "1:600427048185:web:baf65163dda56b5d770628",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
