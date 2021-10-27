import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-24h-timepicker";

class TimeInPickers extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
      timeOut: "",
    };
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({
      time: `${hour}:${minute}`,
      timeOut: `${hour}: ${minute}`,
    });
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
            backgroundColor: "blue",
            borderRadius: 6,
          }}
        >
          <Text style={{ fontSize: 34 }}>{this.state.time}</Text>

          {/*} <Text
            style={{ fontSize: 18, color: "black", width: 100, height: 20 }}
          >
            {this.state.time}
    </Text>*/}
        </TouchableOpacity>

        <TimePicker
          placeholder={this.state.time}
          ref={(ref) => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
        {/*} <Text
            style={{ fontSize: 18, color: "black", width: 100, height: 20 }}
          >
            {this.state.time}
    </Text>*/}
        {/*  <Text style={styles.text}>time ou:{this.state.time}</Text>
        <TimePicker
          ref={(ref) => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TimePickers;
