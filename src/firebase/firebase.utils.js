import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDR6IgLsupNUeOFwhf-cUkJ5gX_X8N5NfE",
  authDomain: "crwn-db-82815.firebaseapp.com",
  projectId: "crwn-db-82815",
  storageBucket: "crwn-db-82815.appspot.com",
  messagingSenderId: "34899714937",
  appId: "1:34899714937:web:682f96e48008982e02c5a8",
  measurementId: "G-P4ZKMC3NSK"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
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
        ...addtionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    };
  };

  return userRef;
};

firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
