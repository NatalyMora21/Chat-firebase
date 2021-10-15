import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyCXVb-DHdNyc649vL_mFksclUT4NYkPWDM",
  authDomain: "reactfirebasedemos-7b436.firebaseapp.com",
  databaseURL: "https://reactfirebasedemos-7b436-default-rtdb.firebaseio.com/",
  projectId: "reactfirebasedemos-7b436",
  storageBucket: "reactfirebasedemos-7b436.appspot.com",
  messagingSenderId: "524885351682",
  appId: "1:524885351682:web:20b3f4845650cf965cf61b",
  measurementId: "G-4E21K7VN5J"
    
  };
  firebase.initializeApp(config);
  
  export const auth = firebase.auth;
  export const db = firebase.database();