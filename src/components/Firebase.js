import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, signInWithCustomToken } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbIVgV90rectK1vFBrG_g9sxNcbXJ7au8",
  authDomain: "vajra-ecaac.firebaseapp.com",
  projectId: "vajra-ecaac",
  storageBucket: "vajra-ecaac.appspot.com",
  messagingSenderId: "1024735740294",
  appId: "1:1024735740294:web:3804e9fa5b6832548d6c07",
  measurementId: "G-ZCCXN5WSMB"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}