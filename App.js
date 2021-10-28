import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./components/screens/HomeScreen";
import UserScreen from "./components/screens/UserScreen";
import BookingHistory from "./components/screens/BookingHistory";
import ViewDetails from "./components/screens/ViewDetails";
import PreviewBooking from "./components/screens/PreviewBooking";
import ConfirmBooking from "./components/screens/ConfirmBooking";
import Main from "./components/screens/Main";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Main"
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="BookingHistory" component={BookingHistory} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen name="ViewDetails" component={ViewDetails} />
          <Stack.Screen name="PreviewBooking" component={PreviewBooking} />
          <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
