// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB2oryq3dvSw1zQYFZgss8IggGBMNdqHc",
  authDomain: "kindergarden-a6225.firebaseapp.com",
  projectId: "kindergarden-a6225",
  storageBucket: "kindergarden-a6225.appspot.com",
  messagingSenderId: "458356654544",
  appId: "1:458356654544:web:2be9b10450ea391314b9d5",
  measurementId: "G-5JV5VMN9T3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
