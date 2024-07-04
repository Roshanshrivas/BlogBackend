import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAO59g5U--OMf6UvMlmJs83Q2rhEQbu1w4",
  authDomain: "blogging-4d264.firebaseapp.com",
  projectId: "blogging-4d264",
  storageBucket: "blogging-4d264.appspot.com",
  messagingSenderId: "320532124384",
  appId: "1:320532124384:web:d240e9fccfd162c7f17685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}














