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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transfermedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    }
  })

  return transfermedCollection.reduce((accululator, collection) =>  {
    accululator[collection.title.toLowerCase()] = collection;
    return accululator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
};

firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = firebase.firestore();

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export default firebase;
