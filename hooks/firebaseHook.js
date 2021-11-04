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
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("user_birthday");

  // Assuming the current user is an Apple user linking a Facebook provider.
  auth.currentUser
    .linkWithPopup(provider)
    .then((result) => {
      // Facebook credential is linked to the current Apple user.
      // Facebook additional data available in result.additionalUserInfo.profile,
      // Additional Facebook OAuth access token can also be retrieved.
      // result.credential.accessToken
      // The user can now sign in to the same account
      // with either Apple or Facebook.
      const user = result.user;
      const { navigate } = this.props.navigation;

      if (user) {
        navigate("HomeScreen");
      } else {
        alert("no acount has been found");
      }
    })
    .catch((error) => {
      // Handle error.
      alert("failed to sign in with facebook");
    });
};

const Apple = () => {
  const provider = new firebase.auth.OAuthProvider("apple.com");
  auth
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // The signed-in user info.
      const user = result.user;

      // You can also get the Apple OAuth Access and ID Tokens.
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
      // ...
      // ...
      const { navigate } = this.props.navigation;

      if (user) {
        navigate("HomeScreen");
      } else {
        alert("no acount has been found");
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      // ...
    });
};

const Google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

const Signout = () => {
  auth
    .signOut()
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
