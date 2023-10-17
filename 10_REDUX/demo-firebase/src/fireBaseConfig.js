// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgneV1KlPWfh_rnb-p6jy17UU4fAyDgEI",
  authDomain: "cda-frontend.firebaseapp.com",
  databaseURL: "https://cda-frontend-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cda-frontend",
  storageBucket: "cda-frontend.appspot.com",
  messagingSenderId: "1096543419070",
  appId: "1:1096543419070:web:95f8e9048c7b0507ecfcef",
  measurementId: "G-8LL9LJ9ZPS"
};

export const BASE_DB_URL = firebaseConfig.databaseURL;
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`
export const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);