import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

import { joinClass } from "../utilities/fetchCalls";

export default class JoinClass extends Component {
  constructor() {
    super();

    this.state = {
      status: "entry",
      key: ""
    };
  }

  setFetching = () => {
    this.setState({ status: "fetching" });
  };

  setError = () => {
    this.setState({
      status: "error"
    });
  };

  setSuccess = () => {
    this.setState({
      status: "success"
    });
  };

  setNoMatch = () => {
    this.setState({
      status: "no match"
    });
  };

  handleKeyPress = key => {
    this.setState({ key });
  };

  handleSubmit = async () => {
    if (this.state.key) {
      this.setState({
        status: "fetching"
      });
    } else {
      return;
    }

    try {
      const response = await joinClass(this.state.key, this.props.id);

      if (response === "Updated student class") {
        this.setState({
          status: "success"
        });
        this.props.updateUser();
      } else if (response === "Class not found") {
        this.setState({
          status: "no match"
        });
        return;
      }
    } catch (error) {
      this.setState({ status: "error" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.status === "entry" && (
          <Text style={styles.text}>Enter a class key</Text>
        )}
        {this.state.status === "success" && (
          <Text style={styles.text}>Success!</Text>
        )}
        {this.state.status === "error" && (
          <Text style={styles.text}>Server error - try again later</Text>
        )}
        {this.state.status === "no match" && (
          <Text style={styles.text}>No classes match this key</Text>
        )}
        {this.state.status === "fetching" && (
          <Text style={styles.text}>Updating...</Text>
        )}
        <TextInput
          onChangeText={text => this.handleKeyPress(text)}
          style={styles.input}
          placeholder="class key"
          value={this.state.key}
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
    alignItems: "center",
    marginBottom: 48,
    marginTop: 24
  },
  text: { color: "#d5d5d5" },
  input: {
    marginTop: 10,
    width: 200,
    backgroundColor: "#d5d5d5",
    height: 26,
    paddingLeft: 8
  },
  button: {
    backgroundColor: "#333",
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
    color: "#d5d5d5",
    fontWeight: "bold",
    paddingTop: 8
  }
});
