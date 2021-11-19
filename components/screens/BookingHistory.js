import React, { Component } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from "react-native";
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
import { auth, db } from "../../database/firebase";
import moment from "moment";

export default class BookingHistory extends Component {
  state = {
    bookings: null,
  };

  constructor(props) {
    super(props);
  }

  getBookings() {
    const uid = auth?.currentUser?.uid;
    return db
      .collection("bookings")
      .where("uuid", "==", uid)
      .onSnapshot((documentSnap) => {
        const data = documentSnap.docs.map((document) => document.data());
        //console.log(data);
        this.setState({ bookings: data });
      });
  }
  componentDidMount() {
    this.getBookings();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={globalStyles.container}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.bookings}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return (
                <View style={globalStyles.flatlistContainer}>
                  <Image
                    source={{ uri: item.imageURL }}
                    style={globalStyles.image}
                  />
                  <View style={{ marginHorizontal: 20 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "grey",
                        marginVertical: 5,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text>{item.address}</Text>
                    <Text>{item.phone}</Text>
                    <Text>{item.guest}</Text>
                    <Text>
                      {item.timein}-{item.timeOut}
                    </Text>
                    <Text> {new Date(item.date.toDate()).toDateString()}</Text>
                  </View>
                  <TouchableOpacity style={{ top: "15%" }}>
                    <Ionicons name="ios-eye-outline" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={globalStyles.Tab}>
          <View style={globalStyles.iconTab}>
            <TouchableOpacity onPress={() => navigate("HomeScreen")}>
              <FontAwesome
                name="home"
                color="black"
                size={34}
                style={{ margin: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("BookingHistory")}>
              <MaterialIcons
                sign
                name="date-range"
                color="black"
                size={34}
                style={{ marginHorizontal: 90 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("UserScreen")}>
              <AntDesign
                name="user"
                color="black"
                size={34}
                style={{ marginHorizontal: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
