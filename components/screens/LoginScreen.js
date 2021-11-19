import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import globalUserModel from "../Model";
import { auth } from "../../database/firebase";
import firebase from "firebase";

const image = require("../../assets/Restaurant/loginscreen.jpg");
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  Login() {
    auth
      .signInWithEmailAndPassword(
        globalUserModel.email,
        globalUserModel.password
      )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const { navigate } = this.props.navigation;

        if (user) {
          navigate("HomeScreen");
        } else {
          alert("no acount has been found");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Please check your network bandwith");
        //alert(errorMessage);
        //  alert("this account is not registered");
        // alert(errorMessage);
        // ..
      });
  }

  Google() {
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
  }

  Facebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope("user_birthday");

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
  }

  Apple() {
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
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ width: "100%", height: "100%" }}>
        <ImageBackground
          resizeMode="stretch"
          source={image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 40,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "90%",
              borderRadius: 20,
              marginVertical: "20%",
              backgroundColor: "rgba(52, 52, 52, 0.3)",
            }}
            transparant={true}
          >
            <TouchableOpacity onPress={() => navigate("Main")}>
              <AntDesign
                name="closecircle"
                size={24}
                color="#32AFB7"
                style={{ padding: 24 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 30,
                color: "#FFFFFF",
              }}
            >
              Welcome Back
            </Text>
            <KeyboardAvoidingView>
              <View
                style={{
                  width: "70%",
                  marginVertical: 40,
                  left: 15,
                }}
              >
                <Input
                  placeholder="address@address.coom"
                  value={globalUserModel.email}
                  onChangeText={(email) => globalUserModel.setEmail(email)}
                  style={{ color: "#FFFFFF" }}
                />
                <Input
                  placeholder="password"
                  value={globalUserModel.password}
                  onChangeText={(password) =>
                    globalUserModel.setPassword(password)
                  }
                  secureTextEntry={true}
                  style={{ color: "#FFFFFF" }}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={{ flexDirection: "row", marginHorizontal: 25 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "#FFFFFF",
                }}
              >
                Sign in
              </Text>
              <TouchableOpacity
                onPress={() => {
                  try {
                    //navigate("HomeScreen");
                    this.Login();
                  } catch (error) {
                    const erro = error.message;
                    alert("please check your email and password");
                  }
                }}
                style={{
                  borderRadius: 40,
                  backgroundColor: "#32AFB7",
                  marginHorizontal: "53.5%",
                  height: 50,
                  width: 50,
                }}
              >
                <Ionicons
                  name="ios-chevron-back"
                  size={34}
                  color="black"
                  style={{
                    alignSelf: "center",
                    marginVertical: 7,
                    transform: [{ rotateY: "180deg" }],
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 55 }}>
              <TouchableOpacity
                onPress={() => {
                  try {
                    this.Google();
                  } catch (error) {
                    const errorMess = error.message;
                    alert("something went wrong while sigining in");
                  }
                }}
                style={{
                  borderRadius: 40,
                  backgroundColor: "#FFFFFF",
                  marginHorizontal: "5%",
                  height: 50,
                  width: 50,
                }}
              >
                <Ionicons
                  name="ios-logo-google"
                  size={34}
                  color="black"
                  style={{ alignSelf: "center", marginVertical: 7 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  try {
                    this.Apple();
                  } catch (error) {
                    const errorMess = error.message;
                    alert("something went wrong while sigining in");
                  }
                }}
                style={{
                  borderRadius: 40,
                  backgroundColor: "#FFFFFF",
                  marginHorizontal: "18%",
                  height: 50,
                  width: 50,
                }}
              >
                <AntDesign
                  name="apple1"
                  size={34}
                  color="black"
                  style={{ alignSelf: "center", marginVertical: 7 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  try {
                    this.Facebook();
                    console.log(this.Facebook());
                  } catch (error) {
                    const errorMess = error.message;
                    console.log(errorMess);
                    alert("something went wrong while sigining in");
                  }
                }}
                style={{
                  borderRadius: 40,
                  backgroundColor: "#FFFFFF",
                  marginHorizontal: "5%",
                  height: 50,
                  width: 50,
                }}
              >
                <FontAwesome
                  name="facebook"
                  size={34}
                  color="black"
                  style={{ alignSelf: "center", marginVertical: 7 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
              <TouchableOpacity onPress={() => navigate("RegisterScreen")}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#FFFFFF",
                    textDecorationLine: "underline",
                  }}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#FFFFFF",
                  textDecorationLine: "underline",
                  marginHorizontal: "26%",
                }}
              >
                Forgot password
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
