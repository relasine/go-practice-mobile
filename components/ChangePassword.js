import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import { changeStudentPassword } from "../utilities/fetchCalls";

export default class ChangePassword extends Component {
  constructor() {
    super();

    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      error: false,
      noMatch: false,
      success: false,
      fetching: false,
      incorrectPassword: false
    };
  }

  handleOldPasswordPress = text => {
    this.setState({
      oldPassword: text
    });
  };

  handleNewPasswordPress = text => {
    this.setState({
      newPassword: text
    });
  };

  handleNewPasswordConfirmPress = text => {
    this.setState({
      confirmNewPassword: text
    });
  };

  handleSubmit = async () => {
    if (this.state.newPassword !== this.state.confirmNewPassword) {
      this.setState({
        noMatch: true
      });
      return;
    }
    const payload = {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword,
      id: this.props.user.student.id
    };
    try {
      const response = await changeStudentPassword(payload);

      if (response === "Incorrect Password") {
        this.setState({
          incorrectPassword: true,
          error: false,
          noMatch: false,
          success: false,
          fetching: false
        });
      } else if (response === "Successfully changed user password") {
        this.setState({
          incorrectPassword: false,
          error: false,
          noMatch: false,
          success: true,
          fetching: false
        });
      }

      console.log(response);
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.incorrectPassword &&
          !this.state.error &&
          !this.state.noMatch &&
          !this.state.success &&
          !this.state.fetching && (
            <Text style={styles.text}>Change Password</Text>
          )}
        {this.state.success && <Text style={styles.text}>Success!</Text>}
        {this.state.incorrectPassword && (
          <Text style={styles.text}>Incorrect password</Text>
        )}
        {this.state.noMatch && (
          <Text style={styles.text}>New passwords don't match</Text>
        )}
        <TextInput
          onChangeText={text => this.handleOldPasswordPress(text)}
          style={styles.input}
          placeholder="current password"
          value={this.state.oldPassword}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={text => this.handleNewPasswordPress(text)}
          style={styles.input}
          placeholder="new password"
          value={this.state.newPassword}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={text => this.handleNewPasswordConfirmPress(text)}
          style={styles.input}
          placeholder="confirm new password"
          value={this.state.confirmNewPassword}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    justifyContent: "center",
    alignItems: "center"
  },
  text: { color: "#d5d7de" },
  input: {
    marginTop: 10,
    width: 200,
    backgroundColor: "#d5d5d5",
    height: 26,
    paddingLeft: 8
  },
  button: {
    backgroundColor: "#8995b7",
    width: 100,
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
  }
});