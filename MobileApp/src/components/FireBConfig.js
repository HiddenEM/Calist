import Firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB1RBkfu0oJECix7TBD6qPeMlKZ0lGTC1M",
  authDomain: "epitech-calist.firebaseapp.com",
  databaseURL: "https://epitech-calist-default-rtdb.firebaseio.com/",
  projectId: "epitech-calist",
  storageBucket: "epitech-calist.appspot.com",
  messagingSenderId: "721526189265",
  appId: "1:721526189265:android:90a086504d998695a9a9f0"
};

//https://epitech-calist.firebaseapp.com/__/auth/handler

export const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();