import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/globalStyles";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <ImageBackground
          resizeMode="stretch"
          source={require("../../assets/Restaurant/main.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ flex: 1, marginVertical: 330 }}>
            <TouchableOpacity
              style={globalStyles.signInButton}
              onPress={() => navigate("LoginScreen")}
            >
              <Text
                style={{
                  fontSize: 35,
                  color: "white",
                  alignSelf: "center",
                  marginVertical: 10,
                  fontWeight: "bold",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={globalStyles.signInButton}
              onPress={() => navigate("RegisterScreen")}
            >
              <Text
                style={{
                  fontSize: 35,
                  color: "white",
                  alignSelf: "center",
                  marginVertical: 10,
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
