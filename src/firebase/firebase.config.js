// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1m5AC5L-cqYUwFH_CTgR9Kyb6biYYl_8",
  authDomain: "development-purpose-af29c.firebaseapp.com",
  projectId: "development-purpose-af29c",
  storageBucket: "development-purpose-af29c.appspot.com",
  messagingSenderId: "590725453659",
  appId: "1:590725453659:web:973455a58ddcd5b58f2c7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;