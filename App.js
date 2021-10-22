import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./components/screens/HomeScreen";
import UserScreen from "./components/screens/UserScreen";
import BookingHistory from "./components/screens/BookingHistory";
import ViewDetails from "./components/screens/ViewDetails";

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BookingHistory"
            component={BookingHistory}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ViewDetails"
            component={ViewDetails}
            options={{
              headerShown: false,
            }}
          />
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
