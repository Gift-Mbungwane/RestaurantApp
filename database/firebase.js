import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = {
  apiKey: "AIzaSyCMRUBSak9mybe61V-sQMy5WrHWz7-BYdQ",

  authDomain: "restaurantbooking-328010.firebaseapp.com",

  projectId: "restaurantbooking-328010",

  storageBucket: "restaurantbooking-328010.appspot.com",

  messagingSenderId: "545435852745",

  appId: "1:545435852745:web:f7e6d38f72c0e082625218",

  measurementId: "G-C6X05MR7B1",
};

const app = firebase.initializeApp(firebaseApp);
const db = app.firestore();
const auth = app.auth();
const userCollection = db.collection("users");
const bookingCollection = db.collection("booking");
const realtimedb = app.database();
const storage = app.storage(); //"gs://restaurantbooking-328010.appspot.com"
const storageRef = storage.ref();
const imagesRef = storageRef.child("images");

const fb = firebase.storage.TaskEvent.STATE_CHANGED;
// var fileName = "space.jpg";
// var spaceRef = imagesRef.child(fileName);

export {
  db,
  auth,
  userCollection,
  firebaseApp,
  realtimedb,
  storage,
  bookingCollection,
  storageRef,
  imagesRef,
  fb,
};
