import { initializeApp } from "firebase/app";
import {getAuth,  createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAXOrSEAf2YzYW8o4R3-vrLFtKGN_YVCXw",
  authDomain: "messageme-f0999.firebaseapp.com",
  projectId: "messageme-f0999",
  storageBucket: "messageme-f0999.appspot.com",
  messagingSenderId: "1136757433",
  appId: "1:1136757433:web:938deedaa51f985787a968"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()