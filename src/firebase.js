import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// firebase config key for the firebase connection
const firebaseConfig = {
  apiKey: "AIzaSyA_CzzbPjiLC0SkzeU2pdfpc7ohe7YQ6PM",
  authDomain: "disney-clone-6f0ea.firebaseapp.com",
  projectId: "disney-clone-6f0ea",
  storageBucket: "disney-clone-6f0ea.appspot.com",
  messagingSenderId: "538036973617",
  appId: "1:538036973617:web:1b52616dee4cd65f41e510",
};

// Initializing the firebase services
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Setting up the google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);
// const storage = firebase.storage();

export { auth, provider, signInWithGoogle };

export default db;
