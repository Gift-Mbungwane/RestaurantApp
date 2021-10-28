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
import Login from "../../hooks/firebaseHook";
import { auth } from "../../database/firebase";

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
        if (user) {
          navigate("HomeScreen");
        } else {
          alert("please refresh your app");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("this account is not registered");
        // alert(errorMessage);
        // ..
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
                  secureTextEntry
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
                    this.Login();
                  } catch (error) {
                    const erro = error.message;
                    alert("please check your email and password");
                  }
                }}
                style={{
                  borderRadius: 40,
                  backgroundColor: "#32AFB7",
                  marginHorizontal: "54%",
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
                  marginHorizontal: "27%",
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
