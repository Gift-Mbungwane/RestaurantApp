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

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={globalStyles.container}>
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
