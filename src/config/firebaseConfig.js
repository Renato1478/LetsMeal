import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAO_sLfPorokOcaeDbdfzTezK8la660mKc",
  authDomain: "letsmeal-e1260.firebaseapp.com",
  projectId: "letsmeal-e1260",
  storageBucket: "letsmeal-e1260.appspot.com",
  messagingSenderId: "833350335113",
  appId: "1:833350335113:web:81f5d8e72fc070d0ad2458",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
