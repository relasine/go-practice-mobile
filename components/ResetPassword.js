import React, { Component } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity
} from "react-native";

import fetchCalls, { resetStudentPassword } from "../utilities/fetchCalls";

export default class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      incomplete: false,
      fetching: false,
      error: false,
      noMatch: false
    };
  }

  handleEmailPress = text => {
    this.setState({
      email: text,
      incomplete: false,
      error: false
    });
  };

  handleReset = () => {
    if (this.state.fetching) {
      return;
    }

    if (this.state.email) {
      this.callReset();
    } else {
      this.setIncomplete();
    }
  };

  callReset = async () => {
    if (!this.state.email) {
      this.setIncomplete();

      return;
    }

    this.setFetching();

    try {
      const response = await resetStudentPassword(this.state.email);

      if (response === "Password reset email sent") {
        this.setState({
          success: true,
          fetching: false,
          error: false
        });
      }

      if (response === "User not found") {
        this.setState({
          fetching: false,
          noMatch: true,
          error: false
        });
      }
    } catch (error) {
      this.setState({
        error: true,
        fetching: false,
        noMatch: false
      });
      console.log(error);
    }
  };

  setIncomplete = () => {
    this.setState({
      incomplete: true,
      fetching: false,
      error: false,
      noMatch: false
    });
  };

  setFetching = () => {
    this.setState({
      incomplete: false,
      fetching: true,
      error: false,
      noMatch: false
    });
  };

  handleLogin = () => {
    this.props.navigate("login");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Forgot My Password</Text>
        <TextInput
          onChangeText={text => this.handleEmailPress(text)}
          style={styles.input}
          placeholder="email"
          value={this.state.email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleReset}>
          <Text style={styles.submit}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {
    marginTop: 10,
    width: 200,
    backgroundColor: "#d5d5d5",
    height: 26,
    paddingLeft: 8
  },
  bottomInput: {
    marginBottom: 20
  },
  text: {
    color: "#d5d7de"
  },
  button: {
    backgroundColor: "#8995b7",
    width: 170,
    paddingBottom: 4,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 32
  },
  submit: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d7de",
    fontWeight: "bold",
    paddingTop: 8
  },
  login: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d7de",
    fontWeight: "bold",
    paddingTop: 8
  }
});
