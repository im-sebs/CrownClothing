import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqB9FYyfzZ7R755NH0TUzLPdDypR-uLko",
  authDomain: "crownclothing-ddbb5.firebaseapp.com",
  databaseURL: "https://crownclothing-ddbb5.firebaseio.com",
  projectId: "crownclothing-ddbb5",
  storageBucket: "crownclothing-ddbb5.appspot.com",
  messagingSenderId: "805185193200",
  appId: "1:805185193200:web:cda6cf86aa5c6c83996e35",
  measurementId: "G-67XV2ZYKWD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
