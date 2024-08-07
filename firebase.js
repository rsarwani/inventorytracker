// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrvDsqOU-UvLgwQohvCNW8D-rL3XU_FrA",
  authDomain: "inventory-mangement-44fd8.firebaseapp.com",
  projectId: "inventory-mangement-44fd8",
  storageBucket: "inventory-mangement-44fd8.appspot.com",
  messagingSenderId: "781938408932",
  appId: "1:781938408932:web:de87f94ebe665d404c9bf1",
  measurementId: "G-45PCC0BH0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};