import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-24h-timepicker";
import globalUserModel from "./Model";

export default class TimePickers extends Component {
  constructor() {
    super();
    this.state = {
      time: "19:20",
    };
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({
      time: `${hour}:${minute}`,
    });
    globalUserModel.setTimeIn(`${hour}:${minute}`);
    this.TimePicker.close();
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={{
            width: 100,
            height: 35,
            backgroundColor: "#FFFFFF",
            borderRadius: 6,
          }}
        >
          <Text style={{ fontSize: 34 }}>{this.state.time}</Text>
        </TouchableOpacity>
        <TimePicker
          ref={(ref) => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
      </View>
    );
  }
}
