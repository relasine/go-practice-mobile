import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import ConfirmLeaveClass from "./ConfirmLeaveClass";

import { removeFromClass } from "../utilities/fetchCalls";

export default class ClassInfo extends Component {
  constructor() {
    super();

    this.state = {
      status: "",
      showModal: false
    };
  }

  showModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

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
        <ConfirmLeaveClass
          modalVisible={this.state.showModal}
          cancel={this.showModal}
          leaveClass={this.removeFromClass}
        />
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
        <TouchableOpacity onPress={this.showModal} style={styles.button}>
          <Text style={styles.buttonText}>Leave Class</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 48,
    marginTop: 24
  },
  text: {
    color: "#d5d5d5",
    textAlign: "center",
    marginBottom: 8,
    fontSize: 18
  },
  button: {
    backgroundColor: "#d5d5d5",
    width: 140,
    paddingBottom: 4,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 48
  },
  buttonText: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
    paddingTop: 8
  }
});
