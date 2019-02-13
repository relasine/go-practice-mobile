import React, { Component } from "react";
import { ScrollView, Text, TextInput, Image, StyleSheet } from "react-native";

import ChangePassword from "./ChangePassword";
import JoinClass from "./JoinClass";
import ClassInfo from "./ClassInfo";

import { fetchClass } from "../utilities/fetchCalls";

export default class Settings extends Component {
  constructor() {
    super();

    this.state = {
      klass: undefined,
      fetching: false,
      error: false
    };
  }

  componentDidMount() {
    if (this.props.user.student.class_id) {
      this.getClassData();
    }
  }

  getClassData = async () => {
    this.setFetching();

    try {
      const klass = await fetchClass(this.props.user.student.class_id);

      this.setState({ klass, fetching: false, error: false });
    } catch (error) {
      console.log(error);
      this.setState({
        fetching: false,
        error: true
      });
    }
  };

  setFetching = () => {
    this.setState({
      fetching: true,
      error: false
    });
  };

  removeFromClassInState = () => {
    this.setState(
      {
        klass: undefined
      },
      this.props.updateUser
    );
  };

  addToClassInState = async () => {
    await this.props.updateUser();
    this.getClassData();
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.headerText}>Settings</Text>
        {!this.props.user.student.class_id ? (
          <JoinClass
            updateUser={this.addToClassInState}
            id={this.props.user.student.id}
          />
        ) : (
          <ClassInfo
            updateUser={this.removeFromClassInState}
            data={this.state.klass}
            id={this.props.user.student.id}
          />
        )}
        <ChangePassword user={this.props.user} />
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
