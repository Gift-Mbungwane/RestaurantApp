import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import globalUserModel from "../Model";

export default class PreviewBooking extends React.Component {
  state = {
    isVisible: false,
  };
  constructor(props) {
    super(props);
    //   { id, name, location, hours, description, serviceOption, image } = this.props.params;
  }
  displayModal(show) {
    this.setState({ isVisible: show });
  }
  render() {
    const { restoName, locate } = this.props.route.params;
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={globalStyles.centeredView}>
        <ScrollView>
          <View
            style={{
              backgroundColor: "#32AFB7",

              height: "100%",
              borderRadius: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                try {
                  goBack("ViewDetails");
                  navigate("ViewDetails", {
                    name: restoName,
                    location: locate,
                  });
                } catch (error) {
                  errorMessage = error.message;
                  alert(errorMessage);
                }
              }}
            >
              <AntDesign
                name="closecircle"
                size={24}
                color="white"
                style={{ padding: 24 }}
              />
            </TouchableOpacity>
            <Text style={globalStyles.headTextModal}>Reservation</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 24,
                  marginVertical: -5,
                }}
              >
                <AntDesign name="user" size={34} color="white" />
                <TextInput
                  multiline
                  placeholder="Name and Surname"
                  //onChangeText={this.updateSearch}
                  // value={search}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "black",
                    height: 35,
                    color: "white",
                    width: 250,
                    marginHorizontal: 5,
                  }}
                  onChangeText={(userName) => globalUserModel.setName(userName)}
                  value={globalUserModel.userName}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 24,
                  marginVertical: -5,
                }}
              >
                <MaterialCommunityIcons name="email" size={34} color="white" />
                <TextInput
                  multiline
                  placeholder="address@address.com"
                  //onChangeText={this.updateSearch}
                  // value={search}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "black",
                    height: 35,
                    color: "white",
                    width: 250,
                    marginHorizontal: 5,
                  }}
                  onChangeText={(email) => globalUserModel.setEmail(email)}
                  value={globalUserModel.email}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 24,
                  marginVertical: -5,
                }}
              >
                <FontAwesome name="phone-square" size={34} color="white" />
                <TextInput
                  multiline
                  placeholder="Phone no.: (+27) 0"
                  //onChangeText={this.updateSearch}
                  // value={search}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "black",
                    height: 35,
                    color: "white",
                    width: 120,
                    marginHorizontal: 5,
                  }}
                  keyboardType="phone-pad"
                  onChangeText={(mobile) => globalUserModel.setMobile(mobile)}
                  value={globalUserModel.mobile}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 24,
                  marginVertical: -5,
                }}
              >
                <FontAwesome5 name="clipboard-list" size={34} color="white" />
                <TextInput
                  multiline
                  placeholder="No. of Guests"
                  //onChangeText={this.updateSearch}
                  // value={search}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "black",
                    height: 35,
                    color: "white",
                    width: 120,
                    marginHorizontal: 5,
                  }}
                  keyboardType="phone-pad"
                  onChangeText={(guest) =>
                    globalUserModel.setNumberOfGuest(guest)
                  }
                  value={globalUserModel.numberOfGuest}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 24,
                  marginVertical: -5,
                }}
              >
                <Ionicons name="ios-time" size={34} color="white" />
                <TextInput
                  multiline
                  placeholder="Time-in"
                  //onChangeText={this.updateSearch}
                  // value={search}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "black",
                    height: 35,
                    color: "white",
                    width: 120,
                    marginHorizontal: 5,
                  }}
                  onChangeText={(timeIn) => globalUserModel.setTimeIn(timeIn)}
                  value={globalUserModel.timeIn}
                />
                <TextInput
                  multiline
                  placeholder="Time-out"
                  //onChangeText={this.updateSearch}
                  // value={search}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "black",
                    height: 35,
                    color: "white",
                    width: 120,
                    marginHorizontal: 10,
                  }}
                  onChangeText={(timeOut) =>
                    globalUserModel.setTimeOut(timeOut)
                  }
                  value={globalUserModel.timeOut}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 24,
                  marginVertical: -5,
                }}
              >
                <MaterialIcons name="date-range" size={34} color="white" />
                <TextInput
                  multiline
                  placeholder="Date"
                  //onChangeText={this.updateSearch}
                  // value={search}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "black",
                    height: 35,
                    color: "white",
                    width: 120,
                    marginHorizontal: 10,
                  }}
                  keyboardType="phone-pad"
                  onChangeText={(date) => globalUserModel.setDate(date)}
                  value={globalUserModel.date}
                />
              </View>
              <View style={globalStyles.confirmBook}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("ConfirmBooking", {
                      name: restoName,
                      location: locate,
                      userName: globalUserModel.userName,
                      email: globalUserModel.email,
                      cellphone: globalUserModel.mobile,
                      guests: globalUserModel.numberOfGuest,
                      timeIn: globalUserModel.timeIn,
                      timeOut: globalUserModel.timeOut,
                      date: globalUserModel.date,
                    });
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "400",
                      marginVertical: 15,
                      fontSize: 24,
                      color: "black",
                    }}
                  >
                    Book now
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
