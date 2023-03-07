// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJNVAvCTVGGcDPstnenpZ-CsDhIG60DPA",
  authDomain: "frontend-project-2.firebaseapp.com",
  projectId: "frontend-project-2",
  storageBucket: "frontend-project-2.appspot.com",
  messagingSenderId: "852240117307",
  appId: "1:852240117307:web:0c0bf399bcd9fc99acb61e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
