import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import globalUserModel from "../Model";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { ListItem } from "react-native-elements/dist/list/ListItem";

export default class BookingDetails extends Component {
  state = {
    image: "",
  };
  constructor(props) {
    super(props);
  }

  render() {
    const {
      email,
      name,
      phone,
      photo,
      guest,
      timein,
      timeOut,
      location,
      createdAt,
      date,
      resto,
      status,
      message,
    } = this.props.route.params;
    const { navigate } = this.props.navigation;
    return (
      <View style={globalStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() =>
                navigate("BookingHistory", {
                  email: email,
                  resto: resto,
                  name: name,
                  phone: phone,
                  photo: photo,
                  guest: guest,
                  timein: timein,
                  timeOut: timeOut,
                  location: location,
                  createdAt: createdAt,
                  date: date,
                  status: status,
                  message: message,
                })
              }
            >
              <Ionicons name="ios-chevron-back" size={34} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{ uri: photo }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 120,
                marginVertical: 10,
                backgroundColor: "white",
                alignSelf: "center",
              }}
            />
            <View>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 20,
                  top: 10,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {resto}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 15,
                  top: 20,
                  alignSelf: "center",
                }}
              >
                <MaterialIcons name="location-pin" size={24} color="#32AFB7" />
                <Text
                  style={{
                    fontSize: 10,
                    alignSelf: "center",
                    width: 220,
                    left: 10,
                  }}
                >
                  {location}
                </Text>
              </View>
            </View>
            <View style={{ alignSelf: "center", marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  top: 10,
                  color: "rgba(89, 89, 89, 1)",
                }}
              >
                Booking Details
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                right: 35,
                alignSelf: "center",
                top: 10,
              }}
            >
              <AntDesign name="user" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>{name}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                right: 39,
                alignSelf: "center",
                top: 10,
              }}
            >
              <MaterialCommunityIcons name="email" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>{email}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                right: 53,
                alignSelf: "center",
                top: 10,
              }}
            >
              <FontAwesome name="phone-square" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>{phone}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                right: 63,
                alignSelf: "center",
                top: 10,
              }}
            >
              <FontAwesome5 name="clipboard-list" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>
                {guest} guest(s)
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                top: 10,
                right: 53,
              }}
            >
              <Ionicons name="ios-time" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 5 }}>
                {timein}-{timeOut}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                top: 10,
                right: 28,
              }}
            >
              <MaterialIcons name="date-range" size={24} color="#32AFB7" />
              <Text style={{ fontSize: 18, marginHorizontal: 10 }}>{date}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                top: 12,
                marginHorizontal: 45,
              }}
            >
              <View style={{ backgroundColor: "grey", borderRadius: 6 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Status
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 17 }}>: {status}</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", top: 15, marginHorizontal: 45 }}
            >
              <Text>{message}</Text>
            </View>
            <View>
              <Text
                style={{ top: 18, alignSelf: "center" }}
              >{`booking ${status} on ${createdAt}`}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
