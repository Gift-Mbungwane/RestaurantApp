import React, { useState, Component } from "react";
import {
  View,
  Platform,
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
import DateTimePicker from "@react-native-community/datetimepicker";
import TimePickers from "../TimePickers";
import TimePicker from "react-native-24h-timepicker";
import { auth } from "../../database/firebase";

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

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }
  onConfirmOut(hour, minute) {
    this.setState({ timeOut: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  onOpen() {
    this.setState({
      timeOut: `${hour}:${minute}`,
    });
  }

  render() {
    const {
      restoName,
      locate,
      description,
      image,
      userName,
      uid,
      photo,
      uName,
    } = this.props.route.params;
    const { navigate, goBack } = this.props.navigation;
    const { selected } = this.state;

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || selected;
      this.setState({ selected: currentDate });
    };

    return (
      <View style={globalStyles.centeredView}>
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
                navigate("ViewDetails", {
                  name: restoName,
                  location: locate,
                  description: description,
                  image: image,
                  uid: uid,
                  photo: photo,
                  uName: uName,
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
            <ScrollView>
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
                <View
                  style={{
                    flexDirection: "row",
                    padding: 24,
                    marginVertical: -25,
                  }}
                >
                  <FontAwesome5 name="clipboard-list" size={34} color="white" />
                  <TextInput
                    multiline
                    placeholder="No. of Guests"
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
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
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

            <TouchableOpacity
              onPress={() => this.TimePicker.open()}
              style={{
                borderRadius: 6,
                backgroundColor: "white",
                height: 40,
                color: "black",
                width: 120,
                marginHorizontal: 20,
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
                onConfirm={(hour, minute) => this.onConfirmOut(hour, minute)}
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
                  uid: uid,
                  photo: photo,
                  uName: uName,
                  image: image,
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
        </View>
      </View>
    );
  }
}
