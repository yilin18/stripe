import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import{
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuDPKg9TNFcB9gzxAKG9Heu1klKOiOG4Y",
  authDomain: "clothing-db-18ead.firebaseapp.com",
  projectId: "clothing-db-18ead",
  storageBucket: "clothing-db-18ead.appspot.com",
  messagingSenderId: "91281073082",
  appId: "1:91281073082:web:67b4caccdf373063bcf383"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) =>{
  const userDocRef = doc(db, 'user', userAuth.uid)
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    }catch(err){
      console.log("error creating the user", err.message)
    }
  }

  return userDocRef

}