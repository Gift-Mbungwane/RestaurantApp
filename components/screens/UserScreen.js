import React, { Component } from "react";
import { View, Text } from "react-native";

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
