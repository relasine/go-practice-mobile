import React, { Component } from "react";
import { ScrollView, Text, TextInput, Image, StyleSheet } from "react-native";

import ChangePassword from "./ChangePassword";
import JoinClass from "./JoinClass";

export default class Settings extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.headerText}>Settings</Text>
        <ChangePassword user={this.props.user} />
        <JoinClass id={this.props.user.student.id} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "Malayalam Sangam MN",
    color: "#d5d7de"
  }
});
