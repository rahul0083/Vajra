import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, signInWithCustomToken } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsP2xxTtRTlnrT0xE5W_Yx1eeZrn3pO6s",
  authDomain: "linked-in-clone-a90db.firebaseapp.com",
  projectId: "linked-in-clone-a90db",
  storageBucket: "linked-in-clone-a90db.appspot.com",
  messagingSenderId: "579939377029",
  appId: "1:579939377029:web:f2f8c4d19d8dc82dabeeec",
  measurementId: "G-XB3VVZXBVP"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}