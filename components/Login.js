import React, { Component } from "react";

import { View, TextInput, StyleSheet, Text, Button } from "react-native";

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

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.handleEmailPress(text)}
          style={styles.input}
          placeholder="email"
          value={this.state.email}
          textContentType="emailAddress"
          autoCapitalize="none"
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
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {
    marginTop: 10,
    width: 200,
    backgroundColor: "#d9d9d9",
    height: 26,
    paddingLeft: 8
  },
  bottomInput: {
    marginBottom: 20
  }
});
