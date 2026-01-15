// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore"
import { dataCollection } from "../db/collection.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjIK5i0eOItoWtrZ47Ez43xGMETABDAeI",
  authDomain: "sturbucksdb.firebaseapp.com",
  projectId: "sturbucksdb",
  storageBucket: "sturbucksdb.firebasestorage.app",
  messagingSenderId: "562493304274",
  appId: "1:562493304274:web:5853264720fcdb1a43ac0b",
  measurementId: "G-P26Q5N33Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function setCategories() {
  try {
    const dataArray = dataCollection()
    const categoriesCollection = collection(db, "categories")
    const promises = dataArray.map(async (cat) => {
      return addDoc(categoriesCollection, cat);
    })
    await Promise.all(promises)
  } catch (error) {
    console.log(error)
  }
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const docs = querySnapshot.docs.map(doc => ({
      id:doc.id,
      ...doc.data()
    }))
  return docs
}