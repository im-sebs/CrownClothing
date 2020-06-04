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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
