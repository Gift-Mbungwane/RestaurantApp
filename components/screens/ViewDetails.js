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
import { TouchableOpacity } from "react-native-gesture-handler";
import { restaurants } from "../../api/Rstaurants";
import { ScrollView } from "react-native-gesture-handler";
import DatePickers from "../DatePickers";

//const image = require("../../assets/burger.jpg");

export default class ViewDetails extends React.Component<Props> {
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
    const { name, image, location, hours, menu } = this.props.route.params;
    const { navigate } = this.props.navigation;

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.centeredView}>
          {/**Modal */}
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              // this.setState(!this.state.modalVisible);
            }}
          >
            <ScrollView>
              <View
                style={{
                  backgroundColor: "#32AFB7",
                  marginTop: 100,
                  height: 800,
                  borderRadius: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.displayModal(!this.state.isVisible);
                  }}
                >
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="white"
                    style={{ padding: 24 }}
                  />
                </TouchableOpacity>
                <Text style={globalStyles.headerText}>Reservation</Text>
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <View style={{ flexDirection: "row", padding: 24 }}>
                    <AntDesign name="user" size={34} color="white" />
                    <TextInput
                      placeholder="Name and Surname"
                      //onChangeText={this.updateSearch}
                      // value={search}
                      style={{
                        borderRadius: 20,
                        backgroundColor: "black",
                        height: 40,
                        color: "white",
                        width: 250,
                        marginHorizontal: 5,
                        marginVertical: -2,
                      }}
                    ></TextInput>
                  </View>
                  <View style={{ flexDirection: "row", padding: 24 }}>
                    <MaterialCommunityIcons
                      name="email"
                      size={34}
                      color="white"
                    />
                    <TextInput
                      placeholder="address@address.com"
                      //onChangeText={this.updateSearch}
                      // value={search}
                      style={{
                        borderRadius: 20,
                        backgroundColor: "black",
                        height: 40,
                        color: "white",
                        width: 250,
                        marginHorizontal: 5,
                      }}
                    ></TextInput>
                  </View>
                  <View style={{ flexDirection: "row", padding: 24 }}>
                    <FontAwesome name="phone-square" size={34} color="white" />
                    <TextInput
                      placeholder="Phone no.: (+27) 0"
                      //onChangeText={this.updateSearch}
                      // value={search}
                      style={{
                        borderRadius: 20,
                        backgroundColor: "black",
                        height: 40,
                        color: "white",
                        width: 120,
                        marginHorizontal: 5,
                      }}
                      keyboardType="phone-pad"
                    ></TextInput>
                  </View>
                  <View style={{ flexDirection: "row", padding: 24 }}>
                    <FontAwesome5
                      name="clipboard-list"
                      size={34}
                      color="white"
                    />
                    <TextInput
                      placeholder="No. of Guests"
                      //onChangeText={this.updateSearch}
                      // value={search}
                      style={{
                        borderRadius: 20,
                        backgroundColor: "black",
                        height: 40,
                        color: "white",
                        width: 120,
                        marginHorizontal: 5,
                      }}
                      keyboardType="phone-pad"
                    ></TextInput>
                  </View>
                  <View style={{ flexDirection: "row", padding: 24 }}>
                    <Ionicons name="ios-time" size={34} color="white" />
                    <TextInput
                      placeholder="Time-in"
                      //onChangeText={this.updateSearch}
                      // value={search}
                      style={{
                        borderRadius: 20,
                        backgroundColor: "black",
                        height: 40,
                        color: "white",
                        width: 120,
                        marginHorizontal: 5,
                      }}
                      keyboardType="phone-pad"
                    />
                    <TextInput
                      placeholder="Time-out"
                      //onChangeText={this.updateSearch}
                      // value={search}
                      style={{
                        borderRadius: 20,
                        backgroundColor: "black",
                        height: 40,
                        color: "black",
                        width: 120,
                        marginHorizontal: 10,
                      }}
                      keyboardType="phone-pad"
                    />
                  </View>
                  <View style={{ flexDirection: "row", padding: 24 }}>
                    <MaterialIcons name="date-range" size={34} color="white" />
                    <DatePickers
                      style={{
                        borderRadius: 20,
                        backgroundColor: "black",
                        height: 40,
                        color: "white",
                        width: 120,
                        marginHorizontal: 5,
                      }}
                    />
                  </View>
                  <View style={globalStyles.confirmButton}>
                    <TouchableOpacity
                      onPress={() => {
                        return (
                          <View>
                            <Text>successfull</Text>
                          </View>
                        );
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
          </Modal>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigate("HomeScreen")}>
              <Ionicons name="ios-chevron-back" size={34} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={globalStyles.headerTextRview}>{name}</Text>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Ionicons
              name="md-location-sharp"
              size={24}
              color="rgba(89, 89, 89, 1)"
            />
            <View style={{ width: 147, height: 30 }}>
              <Text
                style={{
                  marginHorizontal: 0,
                  alignItems: "flex-start",
                  fontSize: 14.5,
                  width: 300,
                  textAlign: "left",
                  marginVertical: 2,
                  alignContent: "flex-start",
                  alignSelf: "flex-start",
                }}
              >
                {location}
              </Text>
            </View>
          </View>
          <View style={globalStyles.viewDetailsSlideContainer}>
            <Image source={{ uri: image }} style={globalStyles.viewDSImage} />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              height: 19,
              color: "rgba(89, 89, 89, 1)",
            }}
          >
            Service options:
          </Text>
          <Text>{hours}</Text>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Ionicons name="md-warning-outline" size={24} color="#32AFB7" />
            <View style={{ width: 300, height: 30 }}>
              <Text
                style={{
                  marginHorizontal: 5,
                  alignItems: "flex-start",
                  fontSize: 16,
                  textAlign: "left",
                  marginVertical: 4,
                  alignContent: "flex-start",
                  alignSelf: "flex-start",
                }}
              >
                Hours or services may differ
              </Text>
            </View>
          </View>
          <Text style={globalStyles.headerTextRview}>What we offer</Text>
          <Text
            style={{
              color: "red",
              alignSelf: "flex-end",
              marginVertical: -23,
              right: 15,
            }}
          >
            menu.pdf
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row", marginVertical: 35 }}
          >
            <Image source={{ uri: image }} style={globalStyles.imagesList} />
            <Image source={{ uri: image }} style={globalStyles.imagesList} />
            <Image source={{ uri: image }} style={globalStyles.imagesList} />
          </ScrollView>
          <View style={globalStyles.confirmButton}>
            <TouchableOpacity onPress={() => this.displayModal(true)}>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "400",
                  marginVertical: 15,
                  fontSize: 24,
                  color: "#FFFFFF",
                }}
              >
                Book a table
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
