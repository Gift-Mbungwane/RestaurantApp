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
            margin: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              try {
                navigate("PreviewBooking", {
                  name: name,
                  location: location,
                  userName: userName,
                  email: email,
                  cellphone: cellphone,
                  guests: guests,
                  timeIn: timeIn,
                  timeOut: timeOut,
                  date: date,
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
              color="#32AFB7"
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
            <Text
              style={{
                alignSelf: "center",
                fontSize: 24,
                fontWeight: "bold",
                color: "rgba(89, 89, 89, 1)",
              }}
            >
              {name}
            </Text>

            <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
              <MaterialIcons name="location-pin" size={24} color="#32AFB7" />
              <Text style={{ width: 300 }}>{location}</Text>
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
            <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
              <AntDesign name="user" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>
                {userName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                marginVertical: 5,
              }}
            >
              <MaterialCommunityIcons name="email" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>{email}</Text>
            </View>

            <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
              <FontAwesome name="phone-square" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>
                {cellphone}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                marginVertical: 5,
              }}
            >
              <FontAwesome5 name="clipboard-list" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>
                {guests} guest(s)
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
              <Ionicons name="ios-time" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>
                {timeIn}-{timeOut}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                marginVertical: 5,
              }}
            >
              <MaterialIcons name="date-range" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>
                {moment(date).format("YYYY/MM/DD")}
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
                color: "white",
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
