import React, { Component } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity
} from "react-native";

import fetchCalls, { studentLogin } from "../utilities/fetchCalls";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      incomplete: false,
      fetching: false,
      error: false
    };
  }

  handleEmailPress = text => {
    this.setState({
      email: text,
      incomplete: false,
      error: false
    });
  };

  handlePasswordPress = text => {
    this.setState({
      password: text,
      incomplete: false,
      error: false
    });
  };

  handleLogin = () => {
    if (this.state.fetching) {
      return;
    }

    if (this.state.email && this.state.password) {
      this.callLogin();
    } else {
      this.setIncomplete();
    }
  };

  callLogin = async () => {
    const payload = { email: this.state.email, password: this.state.password };

    try {
      const response = await studentLogin(payload);

      console.log(response);

      this.props.setUser(response);
    } catch (error) {
      console.log(error);
      this.setState({ fetching: false, error: true });
    }
  };

  setIncomplete = () => {
    this.setState({ incomplete: true, error: false });
  };

  setFetching = () => {
    this.setState({ fetching: true, error: false });
  };

  handleSignup = () => {
    this.props.navigate("signup");
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.handleEmailPress(text)}
          style={styles.input}
          placeholder="email"
          value={this.state.email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={text => this.handlePasswordPress(text)}
          style={[styles.input, styles.bottomInput]}
          placeholder="password"
          value={this.state.password}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.submit}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
          <Text style={styles.signup}>Signup</Text>
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
  button: {
    backgroundColor: "#8995b7",
    width: 100,
    paddingBottom: 4,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 8,
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
  signup: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d7de",
    fontWeight: "bold",
    paddingTop: 8
  }
});
