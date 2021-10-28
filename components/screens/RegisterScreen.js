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
import { Register } from "../../hooks/firebaseHook";
import { auth, db, realtimedb } from "../../database/firebase";

const image = require("../../assets/Restaurant/register.jpg");
export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
  }
  Register() {
    auth
      .createUserWithEmailAndPassword(
        globalUserModel.email,
        globalUserModel.password
      )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Add a new document in collection "users"
        return db.collection("users").doc(user.uid).set({
          uid: user.uid,
          userName: globalUserModel.userName,
          email: user.email,
          password: globalUserModel.password,
        });
        // ...

        user.updateProfile({
          userName: globalUserModel.userName,
          email: globalUserModel.email,
          password: globalUserModel.password,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // alert(errorMessage);
        alert("This account is registered, please sign in");
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
                fontWeight: "bold",
                fontSize: 30,
                color: "#FFFFFF",
                marginHorizontal: 25,
              }}
            >
              Sign Up for available Booking
            </Text>
            <KeyboardAvoidingView>
              <View
                style={{
                  width: "70%",
                  marginVertical: 40,
                  left: 15,
                  color: "#FFFFFF",
                }}
              >
                <Input
                  placeholder="Name"
                  value={globalUserModel.userName}
                  onChangeText={(userName) => globalUserModel.setName(userName)}
                  style={{ color: "#FFFFFF" }}
                />
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
                Sign up
              </Text>
              <TouchableOpacity
                onPress={() => {
                  try {
                    this.Register();
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

            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 25,
                marginVertical: 40,
              }}
            >
              <TouchableOpacity onPress={() => navigate("LoginScreen")}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#FFFFFF",
                    textDecorationLine: "underline",
                  }}
                >
                  Signin
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
