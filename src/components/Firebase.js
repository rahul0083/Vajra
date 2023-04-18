import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, signInWithCustomToken } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBtN0dmAiTkvlhhlEqueG5nwJdLM1-5wSc",
  authDomain: "vajra-9b913.firebaseapp.com",
  projectId: "vajra-9b913",
  storageBucket: "vajra-9b913.appspot.com",
  messagingSenderId: "458101889219",
  appId: "1:458101889219:web:c7175c4f63210874e12a76",
  measurementId: "G-2NGD64H3QF"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}