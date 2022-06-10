// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt6JzL5HT2vxIyNjdfdutYvbAUb0e35cs",
  authDomain: "slack-clone-b0031.firebaseapp.com",
  projectId: "slack-clone-b0031",
  storageBucket: "slack-clone-b0031.appspot.com",
  messagingSenderId: "156475679550",
  appId: "1:156475679550:web:d4dba591a7e417c472426f",
  measurementId: "G-C14GM4S5LC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
