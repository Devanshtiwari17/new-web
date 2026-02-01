import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhC2aqa9H6CCGuBFFxYkqCIFYPu7x7zeE",
  authDomain: "shop-backend-7b750.firebaseapp.com",
  projectId: "shop-backend-7b750",
  storageBucket: "shop-backend-7b750.firebasestorage.app",
  messagingSenderId: "479937491853",
  appId: "1:479937491853:web:bb231ecc758340ae4a03c4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
