import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc8c2lciZHvkKMVki7mYRrfjsQTqedFSY",
  authDomain: "disney-plus-clone-48f71.firebaseapp.com",
  projectId: "disney-plus-clone-48f71",
  storageBucket: "disney-plus-clone-48f71.appspot.com",
  messagingSenderId: "737844910795",
  appId: "1:737844910795:web:ba611adf9d86a0d661d94e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;