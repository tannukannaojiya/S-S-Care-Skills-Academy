
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiRUSozH71d3oRiQazhOiTvmTvr2tNjuc",
  authDomain: "sscareskillsacademy-adf65.firebaseapp.com",
  projectId: "sscareskillsacademy-adf65",
  storageBucket: "sscareskillsacademy-adf65.firebasestorage.app",
  messagingSenderId: "794444272158",
  appId: "1:794444272158:web:c35e4cd1d648636297540f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;



