// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb3pgUMwqube2ELKnV79Z9WHaacXVaWEM",
  authDomain: "ecomm-a24cb.firebaseapp.com",
  projectId: "ecomm-a24cb",
  storageBucket: "ecomm-a24cb.appspot.com",
  messagingSenderId: "270662882166",
  appId: "1:270662882166:web:d7fda570ac9f9d5124a057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app