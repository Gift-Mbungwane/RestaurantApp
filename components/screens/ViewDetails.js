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
import { restaurants, restImages } from "../../api/Rstaurants";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";
import globalUserModel from "../Model";
import { db } from "../../database/firebase";

export default class ViewDetails extends React.Component<Props> {
  state = {
    menu: null,
  };

  constructor(props) {
    super(props);
  }

  getData() {
    const { uid } = this.props.route.params;
    return db
      .collection("menu")
      .where("uid", "==", uid)
      .onSnapshot((dataSnapshot) => {
        const data = dataSnapshot.docs.map((dataDoc) => dataDoc.data());
        //console.log(data);
        this.setState({ menu: data });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { name, image, location, hours, description, uid, photo, uName } =
      this.props.route.params;
    const { navigate } = this.props.navigation;

    return (
      <View style={globalStyles.container}>
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
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row", marginVertical: 35 }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={globalStyles.headerTextRview}>Description</Text>
              <Text style={{ width: 300 }}>{description}</Text>
            </View>
          </ScrollView>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.menu}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => {
                return (
                  <View style={{ margin: 10 }}>
                    <Image
                      style={globalStyles.image}
                      source={{ uri: item.photoURL }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: "bold", left: 5 }}>
                      {item.menu}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={globalStyles.confirmButton}>
            <TouchableOpacity
              onPress={() =>
                navigate("PreviewBooking", {
                  restoName: name,
                  locate: location,
                  description: description,
                  image: image,
                  uid: uid,
                  photo: photo,
                  uName: uName,
                })
              }
            >
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
