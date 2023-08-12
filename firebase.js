// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqmNS5bdafWNZWXTAxgtrSiNkmyoNqyyU",
  authDomain: "movienight-fire.firebaseapp.com",
  projectId: "movienight-fire",
  storageBucket: "movienight-fire.appspot.com",
  messagingSenderId: "319703209107",
  appId: "1:319703209107:web:3a47e47f51c8f6cd22a966",
  measurementId: "G-P6CNVRKM9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
