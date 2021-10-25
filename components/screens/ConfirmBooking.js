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
import { globalStyles } from "../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

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
      <ScrollView>
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
            height: 550,
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
            <Text style={globalStyles.headerText}>{name}</Text>

            <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
              <MaterialIcons name="location-pin" size={24} color="black" />
              <Text> location: {location}</Text>
            </View>
            <View style={{ alignSelf: "center", marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "rgba(89, 89, 89, 1)",
                }}
              >
                your Booking Details
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>name : {userName}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}> email address: {email}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>
                Cellphone number: {cellphone}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}> {guests} Guest(s) </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Time-In: {timeIn}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Check-Out: {timeOut}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>
                Date : {moment(date).format("YYYY/MM/DD")}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={globalStyles.reviewBooked}
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
      </ScrollView>
    );
  }
}
