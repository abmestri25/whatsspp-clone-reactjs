import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwkVFehQSyLtXZps_UcNZ22I-RlYLFRA0",
  authDomain: "whatsapp-clone-314f8.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-314f8.firebaseio.com",
  projectId: "whatsapp-clone-314f8",
  storageBucket: "whatsapp-clone-314f8.appspot.com",
  messagingSenderId: "1083029223115",
  appId: "1:1083029223115:web:a1a0ade0ad71be2a084d4e",
  measurementId: "G-SPLZ76Z2B0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
