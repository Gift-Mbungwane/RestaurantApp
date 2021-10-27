import React, { useState, Component } from "react";
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
  DatePickerIOS,
} from "react-native";
import { Input } from "react-native-elements";
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
import DatePickers from "../DatePickers";
//import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimePickers from "../TimePickers";
import TimePicker from "react-native-24h-timepicker";

export default class PreviewBooking extends Component {
  state = {
    isVisible: false,
    selected: new Date(),
    time: "00:00",
    timeOut: "12:00",
  };
  constructor(props) {
    super(props);

    //   { id, name, location, hours, description, serviceOption, image } = this.props.params;
  }
  displayModal(show) {
    this.setState({ isVisible: show });
  }
  handleChange = (date) => {
    console.log("date: ", date);
    this.setState({
      selected: date,
    });
  };

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }
  onConfirmOut(hour, minute) {
    this.setState({ timeOut: `${hour}: ${minute}` });
    this.TimePicker.close();
  }

  onOpen() {
    this.setState({
      timeOut: `${hour}: ${minute}`,
    });
  }

  render() {
    const { restoName, locate } = this.props.route.params;
    const { navigate, goBack } = this.props.navigation;
    const { selected } = this.state;

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || selected;
      this.setState({ selected: currentDate });
      // setDate(currentDate);
    };

    return (
      <View style={globalStyles.centeredView}>
        <ScrollView>
          <View
            style={{
              backgroundColor: "#32AFB7",
              height: 630,
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
                    borderRadius: 6,
                    backgroundColor: "white",
                    height: 35,
                    color: "black",
                    width: 200,
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
                    borderRadius: 6,
                    backgroundColor: "white",
                    height: 35,
                    color: "black",
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
                    borderRadius: 6,
                    backgroundColor: "white",
                    height: 35,
                    color: "black",
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
                    borderRadius: 6,
                    backgroundColor: "white",
                    height: 35,
                    color: "black",
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
                <TouchableOpacity
                  onPress={() => this.TimePicker.open()}
                  //onPress={() => this.TimePicker.open() }
                  style={{
                    borderRadius: 6,
                    backgroundColor: "white",
                    height: 40,
                    color: "black",
                    width: 120,
                    marginHorizontal: 5,
                    alignSelf: "center",
                  }}
                >
                  <TimePickers />
                </TouchableOpacity>
                {/*} <TextInput
                  multiline
                  placeholder="Time-in"
                  //onChangeText={this.updateSearch}
                  // value={search}
                  style={{
                    borderRadius: 6,
                    backgroundColor: "white",
                    height: 35,
                    color: "black",
                    width: 120,
                    marginHorizontal: 5,
                  }}
                  onChangeText={(timeIn) => globalUserModel.setTimeIn(timeIn)}
                  value={globalUserModel.timeIn}
                />*/}
                <TouchableOpacity
                  onPress={() => this.TimePicker.open()}
                  //onPress={() => this.TimePicker.open() }
                  style={{
                    borderRadius: 6,
                    backgroundColor: "white",
                    height: 40,
                    color: "black",
                    width: 120,
                    marginHorizontal: 5,
                  }}
                >
                  <Text style={{ fontSize: 40, alignSelf: "center" }}>
                    {this.state.timeOut}
                  </Text>
                  <TimePicker
                    ref={(ref) => {
                      this.TimePicker = ref;
                    }}
                    onCancel={() => this.onCancel()}
                    onConfirm={(hour, minute) =>
                      this.onConfirmOut(hour, minute)
                    }
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 24,
                  marginVertical: -5,
                }}
              >
                <MaterialIcons name="date-range" size={34} color="white" />
                <DateTimePicker
                  selected={selected}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  style={{
                    width: 100,
                    height: 34,
                    marginHorizontal: 5,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 6,
                  }}
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
                      timeOut: this.state.timeOut,
                      date: selected,
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
