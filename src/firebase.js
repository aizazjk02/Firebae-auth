
// First we need to import the firebase and the auth libs 
import firebase from "firebase/compat/app"
import "firebase/compact/auth"

// WE meed this config obj to connect with our firebase app 
// WE can get this key anytime from the firebase console 
const firebaseConfigObj = {
  apiKey: "AIzaSyA_CzzbPjiLC0SkzeU2pdfpc7ohe7YQ6PM",
  authDomain: "disney-clone-6f0ea.firebaseapp.com",
  projectId: "disney-clone-6f0ea",
  storageBucket: "disney-clone-6f0ea.appspot.com",
  messagingSenderId: "538036973617",
  appId: "1:538036973617:web:1b52616dee4cd65f41e510",
};


// Now we need to initalize the firebase app 
firebase.initializeApp(firebaseConfigObj);

// Initalize the authentication 
const auth = firebase.auth();

// Now we need to setup the google auth 
const provider = new firebase.auth.GoogleAuthProvider();

// We need to add this custom parameter so that we get the select account prompt 
provider.setCustomParameters({ promp: "select_account" });

// We can use this function anywhere to sign with google 
const signInWithGoogle = () => auth.signInWithGoogle(provider)

export {signInWithGoogle,auth}
