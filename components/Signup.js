import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      error: false,
      fetching: false
    };
  }

  handleEmailChange = email => {
    if (this.state.fetching) {
      return;
    }

    this.setState({ email, error: false });
  };

  handleNameChange = name => {
    if (this.state.fetching) {
      return;
    }

    this.setState({ name, error: false });
  };

  handlePasswordChange = password => {
    if (this.state.fetching) {
      return;
    }

    this.setState({ password, error: false });
  };

  handleConfirmPasswordChange = confirmPassword => {
    if (this.state.fetching) {
      return;
    }

    this.setState({ confirmPassword, error: false });
  };

  setFetching = () => {
    this.setState({
      fetching: true,
      error: false
    });
  };

  setError = () => {
    this.setState({
      error: true,
      fetching: false
    });
  };

  handleSignup = () => {};

  handleLogin = () => {
    this.props.navigate("login");
  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={text => this.handleEmailChange(text)}
          style={styles.input}
          placeholder="email"
          value={this.state.email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={text => this.handleNameChange(text)}
          style={styles.input}
          placeholder="name"
          value={this.state.name}
        />
        <TextInput
          onChangeText={text => this.handlePasswordChange(text)}
          style={[styles.input]}
          placeholder="password"
          value={this.state.password}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={text => this.handleConfirmPasswordChange(text)}
          style={[styles.input, styles.bottomInput]}
          placeholder="confirm password"
          value={this.state.confirmPassword}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSingup}>
          <Text style={styles.submit}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.submit}>Login</Text>
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
  signup: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d7de",
    fontWeight: "bold",
    paddingTop: 8
  },
  submit: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d7de",
    fontWeight: "bold",
    paddingTop: 8
  }
});
