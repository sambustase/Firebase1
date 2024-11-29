import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPH1jL5XGEFAbweAZHQhz-9saYTCAC-aY",
  authDomain: "vue-firestore-crud-2a543.firebaseapp.com",
  projectId: "vue-firestore-crud-2a543",
  storageBucket: "vue-firestore-crud-2a543.firebasestorage.app",
  messagingSenderId: "1010108820429",
  appId: "1:1010108820429:web:5f8419654cadf4e26c7284"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;