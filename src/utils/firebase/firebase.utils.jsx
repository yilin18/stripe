import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

import{
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd,
    field = 'title'
  ) => {
  

  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object[field].toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done!')
}


export const getCategoriesAndDocuments = async () => {

  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}


export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) =>{
  const userDocRef = doc(db, 'user', userAuth.uid)
  // console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }catch(err){
      console.log("error creating the user", err.message)
    }
  }

  return userDocRef

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback)
}  