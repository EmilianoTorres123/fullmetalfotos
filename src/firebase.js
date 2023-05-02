// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfWiHO_y89-KeRTSZ20toXTqjmXdNN1r8",
  authDomain: "fotosfullmetal.firebaseapp.com",
  projectId: "fotosfullmetal",
  storageBucket: "fotosfullmetal.appspot.com",
  messagingSenderId: "828987900307",
  appId: "1:828987900307:web:d4db274f325b15c7c8e866"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const firebaseapp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseapp.firestore();
const storage = firebase.storage();

export{
  storage, firestore as default
}