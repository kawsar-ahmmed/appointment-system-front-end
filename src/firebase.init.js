// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSylJ0sPhblYk01CVl95V22uzVFQgoQQI",
  authDomain: "personal-doctors.firebaseapp.com",
  projectId: "personal-doctors",
  storageBucket: "personal-doctors.appspot.com",
  messagingSenderId: "483046515343",
  appId: "1:483046515343:web:de295879688a9d095a86fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;