import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDBJijkObRwkBSFOSf3qM9rtabUXqT75Ec",
  authDomain: "miniblog-8a465.firebaseapp.com",
  projectId: "miniblog-8a465",
  storageBucket: "miniblog-8a465.appspot.com",
  messagingSenderId: "584118912087",
  appId: "1:584118912087:web:796bbf2a15f8d37ae44f12"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };