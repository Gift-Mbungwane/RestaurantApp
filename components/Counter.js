import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { decrement, increment, reset } from "./actions/CounterAction";

class Counter extends Component<Props> {
  constructor(props: Props) {
    super(props);
    /* this.state = {
      count: 0,
    };
    */
  }

  increment = () => {
    // this.setState({ count: this.state.count + 1 });

    this.props.increment();
  };

  decrement = () => {
    //this.setState({ count: this.state.count - 1 });
    this.props.decrement();
  };

  reset = () => {
    // this.setState({ count: 0 });
    this.props.reset();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={this.decrement}>
          <Text
            style={{
              borderRadius: 20,
              backgroundColor: "white",
              height: 40,
              color: "black",
              width: 40,
              marginHorizontal: 5,
              fontSize: 30,
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            borderRadius: 20,
            backgroundColor: "white",
            height: 40,
            color: "black",
            width: 40,
            marginHorizontal: 5,
            fontSize: 30,
          }}
        >
          {this.props.count}
        </Text>
        <TouchableOpacity onPress={this.increment}>
          <Text
            style={{
              borderRadius: 20,
              backgroundColor: "white",
              height: 40,
              color: "black",
              width: 40,
              marginHorizontal: 5,
              fontSize: 30,
              alignItems: "center",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset}>
          <Text style={styles.text}>reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    fontSize: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
