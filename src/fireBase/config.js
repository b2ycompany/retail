import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBycp5aJB5XaBc9ORbEkS2Uqkf_dSQtbWs",
  authDomain: "olx-clone-ebe46.firebaseapp.com",
  projectId: "olx-clone-ebe46",
  storageBucket: "olx-clone-ebe46.appspot.com",
  messagingSenderId: "51910246868",
  appId: "1:51910246868:web:85f5fe5b7bd4c8ebff5641",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
