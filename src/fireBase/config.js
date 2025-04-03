import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg0Vkrb9aLiEyEQRntrv5EvC9bSnffFVk",
  authDomain: "retail-5d0f2.firebaseapp.com",
  projectId: "retail-5d0f2",
  storageBucket: "retail-5d0f2.appspot.com",
  messagingSenderId: "281562587128",
  appId: "1:281562587128:web:519b9531907755c871800d"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
