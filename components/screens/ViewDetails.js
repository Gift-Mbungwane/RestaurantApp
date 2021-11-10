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
export default class ViewDetails extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image, location, hours, description, uid } =
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
            <View style={{ flexDirection: "column" }}>
              <Text style={globalStyles.headerTextRview}>Description</Text>
              <Text style={{ width: 300 }}>{description}</Text>
            </View>
            {/* <Image source={{ uri: image }} style={globalStyles.imagesList} />
            <Image source={{ uri: image }} style={globalStyles.imagesList} />*/}
          </ScrollView>
          <View style={globalStyles.confirmButton}>
            <TouchableOpacity
              onPress={() =>
                navigate("PreviewBooking", {
                  userName: globalUserModel.userName,
                  restoName: name,
                  locate: location,
                  description: description,
                  image: image,
                  uid: uid,
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
