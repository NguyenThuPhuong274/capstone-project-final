// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBdR8sE9dHVKC38eif92X97tXaQ3_etDK0",
  authDomain: "jlearning-2001.firebaseapp.com",
  projectId: "jlearning-2001",
  storageBucket: "jlearning-2001.appspot.com",
  messagingSenderId: "496166088104",
  appId: "1:496166088104:web:effdf5eb485cb3817d419d",
  measurementId: "G-JLJGFQBN9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);

export default storage;
