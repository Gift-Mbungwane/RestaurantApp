import React, { Component } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

export default class ConfirmBooking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      location,
      userName,
      email,
      cellphone,
      guests,
      timeIn,
      timeOut,
      date,
    } = this.props.route.params;
    const { navigate, goBack } = this.props.navigation;
    return (
      <View>
        {/*   <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            // this.setState(!this.state.modalVisible);
          }}
        >*/}
        <View
          style={{
            borderRadius: 20,
            marginVertical: 80,
            height: "80%",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              try {
                navigate("PreviewBooking", {
                  name: name,
                  location: location,
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
              color="black"
              style={{ padding: 24 }}
            />
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              alignSelf: "center",
              color: "black",
            }}
          >
            <Text style={{ fontSize: 40 }}>place : {name}</Text>
            <Text> location: {location}</Text>
            <Text>your Booking Details</Text>
            <Text>name : {userName}</Text>
            <Text> email address: {email}</Text>
            <Text>Cellphone number: {cellphone}</Text>
            <Text>Number of Guest: {guests}</Text>
            <Text>Time-In: {timeIn}</Text>
            <Text style={{ fontSize: 40 }}>Check-Out: {timeOut}</Text>
            <Text style={{ fontSize: 40 }}>Date : {date}</Text>
          </View>
          <TouchableOpacity
            style={{
              height: 61,
              width: 240,
              backgroundColor: "white",
              borderRadius: 40,
              position: "absolute",
              alignSelf: "center",
            }}
            onPress={() => {
              alert("you have successfully booked a take");
              // this.displayModal(false);
              navigate("HomeScreen");
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
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
        {/*  </Modal>*/}
      </View>
    );
  }
}
