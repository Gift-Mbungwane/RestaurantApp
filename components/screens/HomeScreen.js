import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/globalStyles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import {
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { restaurants } from "../../api/Rstaurants";
import { NavigationContainer } from "@react-navigation/native";

const image = require("../../assets/burger.jpg");

export default class HomeScreen extends Component {
  state = {
    search: "",
    hasLocationPermission: false,
    latitude: 0,
    longitude: 0,
    restaurantList: [],
  };

  /* constructor(props) {
    super(props);
  }*/
  componentDidMount() {
    this.getLocationAsync();
  }

  async getLocationAsync() {
    //const { status } = await Permissions.askAsync(Permissions.LOCATION);
    const { status } = await Location.requestForegroundPermissionsAsync();
    // Permissions.LOCATION_FOREGROUND
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      this.setState({
        hasLocationPermissions: true,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // alert("the problem is here");
    } else {
      alert("Location permission not granted");
    }
  }

  handleRestaurantSearch = () => {
    console.log("here");
    console.log();
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const location = `location=${this.state.latitude},${this.state.longitude}`;
    const radius = "&radius=5000";
    const type = "&keyword=restaurant";
    const key = "&key=AIzaSyCMRUBSak9mybe61V-sQMy5WrHWz7-BYdQ";
    const restaurantSearchUrl = url + location + radius + type + key;
    fetch(restaurantSearchUrl)
      .then((response) => response.json())
      .then((result) => this.setState({ restaurantList: result }))
      .catch((e) => console.log(e));
  };
  updateSearch = (search) => {
    this.setState({ search });
  };
  ViewDetail = ({ navigation }) => {
    navigation.navigate("ViewDetails");
  };

  render() {
    const { search } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.search}>
          <TextInput
            placeholder="nearby restaurants"
            //onChangeText={this.updateSearch}
            // value={search}
            style={{ borderRadius: 20, backgroundColor: "grey", height: 40 }}
          >
            <Ionicons name="ios-search" size={24} color="black" />
          </TextInput>
        </View>
        <Text style={globalStyles.headerText}>Explore Restaurants</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={restaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={globalStyles.flatlistContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={globalStyles.image}
                />
                <View style={{ padding: 18 }}>
                  <Text
                    style={{
                      marginBottom: 15,
                      fontSize: 16,
                      fontWeight: "bold",
                      width: 200,
                      height: 19,
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      right: 5,
                    }}
                  >
                    <Ionicons
                      name="md-location-sharp"
                      size={24}
                      color="rgba(89, 89, 89, 1)"
                    />
                    <View style={{ width: 147, height: 30 }}>
                      <Text
                        style={{
                          marginHorizontal: 5,
                          alignItems: "flex-start",
                          fontSize: 9,
                          textAlign: "left",
                          alignContent: "flex-start",
                          alignSelf: "flex-start",
                        }}
                      >
                        {item.location}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#32AFB7",
                      height: 20,
                      width: 80,
                      borderRadius: 20,
                      marginVertical: 12,
                      right: 0,
                    }}
                    onPress={() =>
                      navigate("ViewDetails", {
                        id: item.id,
                        name: item.name,
                        location: item.location,
                        hours: item.hours,
                        description: item.description,
                        serviceOption: item.serviceOption,
                        image: item.image,
                        menu1: item.menu1,
                      })
                    }
                  >
                    <Text style={{ alignSelf: "center", fontWeight: "700" }}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
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
