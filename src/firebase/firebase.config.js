// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa1XHM4ZrmLnoAY5MJCe5vXK74JxVMxUo",
    authDomain: "hand-to-hand-2de5a.firebaseapp.com",
    projectId: "hand-to-hand-2de5a",
    storageBucket: "hand-to-hand-2de5a.appspot.com",
    messagingSenderId: "37048283542",
    appId: "1:37048283542:web:8b31d0966d307dcfe2adb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;