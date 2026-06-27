import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmLmTGChFi3F9Awno7qNWNr1wkn4Qb2A4",
  authDomain: "wedding-site-182dc.firebaseapp.com",
  projectId: "wedding-site-182dc",
  storageBucket: "wedding-site-182dc.firebasestorage.app",
  messagingSenderId: "62126419327",
  appId: "1:62126419327:web:2bd5c567fa3528fdd53e4a",
  measurementId: "G-D43N2JJ3FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);