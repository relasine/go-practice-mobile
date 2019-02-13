import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import { removeFromClass } from "../utilities/fetchCalls";

export default class ClassInfo extends Component {
  constructor() {
    super();

    this.state = {
      status: ""
    };
  }

  removeFromClass = async () => {
    this.setFetching();

    try {
      const response = await removeFromClass(this.props.id);
      console.log(response);
      if (response === "Successfully removed student from class") {
        this.props.updateUser();
      }
    } catch (error) {
      console.log(error);
      this.setState({ status: "error" });
    }
  };

  setFetching = () => {
    this.setState({
      status: "fetching"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.data && (
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Class:</Text>{" "}
            {this.props.data.name}
          </Text>
        )}
        {this.props.data && (
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>School</Text>:{" "}
            {this.props.data.school}
          </Text>
        )}
        {!this.props.data && (
          <Text style={styles.text}>Loading class information...</Text>
        )}
        <TouchableOpacity onPress={this.removeFromClass} style={styles.button}>
          <Text style={styles.buttonText}>Leave Class</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "#d5d7de",
    textAlign: "center",
    marginBottom: 8,
    fontSize: 18
  },
  button: {
    backgroundColor: "#8995b7",
    width: 140,
    paddingBottom: 4,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 48
  },
  buttonText: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d7de",
    fontWeight: "bold",
    paddingTop: 8
  }
});
