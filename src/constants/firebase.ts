import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCbkuLbzAx-tJlDrPuWfsYsrVsbd9Q-QP0",
    authDomain: "periculum-17518.firebaseapp.com",
    projectId: "periculum-17518",
    storageBucket: "periculum-17518.appspot.com",
    messagingSenderId: "508372269259",
    appId: "1:508372269259:web:26707f62320465b50cc34e",
    measurementId: "G-MZQDZGWXBB"
  };

let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;