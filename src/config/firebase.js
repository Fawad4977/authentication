// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth ,createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_9Ut1n-M5ER2eBRwke9x4XdFdhf-jMdc",
  authDomain: "my-first-firebase-app-2e9bd.firebaseapp.com",
  projectId: "my-first-firebase-app-2e9bd",
  storageBucket: "my-first-firebase-app-2e9bd.appspot.com",
  messagingSenderId: "688188356478",
  appId: "1:688188356478:web:0e82db8ac9e3ea8c60a52f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
function register (email,password){


createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  function login (email,passoword){
    signInWithEmailAndPassword(auth, email, passoword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


export{
  register,
  login
}