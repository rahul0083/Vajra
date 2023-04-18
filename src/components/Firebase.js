import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, signInWithCustomToken } from "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTzmvIBc_wWAJiTF-GMZ8WZtuvzr8q21M",
  authDomain: "vajra-ffcb9.firebaseapp.com",
  projectId: "vajra-ffcb9",
  storageBucket: "vajra-ffcb9.appspot.com",
  messagingSenderId: "224792673854",
  appId: "1:224792673854:web:b7edee54c32887e5d59b6f",
  measurementId: "G-BR9LF456SQ"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth} 