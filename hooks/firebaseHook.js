import globalUserModel from "../components/Model";
import {
  auth,
  db,
  database,
  firebaseApp,
  realtimedb,
} from "../database/firebase";
import firebase from "firebase";

const Facebook = () => {
  new firebase.auth.FacebookAuthProvider();
};

const Apple = () => {
  new firebase.auth.OAuthProvider("apple.com");
};

const Google = () => {
  new firebase.auth.GoogleAuthProvider();
};

const Signout = () => {
  signOut(auth)
    .then(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          alert("account is still signed in");

          // ...
        } else {
          alert("you're now logged out");
          // User is signed out
          // used this if else method on signing out funtionality
        }
      });
    })

    .catch((error) => {
      // An error happened.
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("unable to signout");
    });
};

export { Apple, Google, Facebook };
