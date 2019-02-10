import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

import Login from "./Login";
import Signup from "./Signup";

export default class Landing extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "login"
    };
  }

  navigate = activePage => {
    this.setState({
      activePage
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Go Practice!</Text>
        {this.state.activePage === "login" && (
          <Login navigate={this.navigate} setUser={this.props.setUser} />
        )}
        {this.state.activePage === "signup" && (
          <Signup navigate={this.navigate} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8995b7",
    position: "absolute",
    top: 50
  }
});
