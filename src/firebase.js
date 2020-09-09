import firebase from "firebase";

const firebaseConfig = {
  apiKey: "your API key",
  authDomain: "whatsapp-clone-314f8.firebaseapp.com",
  databaseURL: "database url",
  projectId: "project demo",
  storageBucket: "whatsapp-clone-314f8.appspot.com",
  messagingSenderId: "dfgfgdskfhk",
  appId: "PPP ID",
  measurementId: "G-SPLZ76Z2B0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
