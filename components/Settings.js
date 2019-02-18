import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

import ChangePassword from "./ChangePassword";
import JoinClass from "./JoinClass";
import ClassInfo from "./ClassInfo";
import SessionExpired from "./SessionExpired";

import { fetchClass } from "../utilities/fetchCalls";

export default class Settings extends Component {
  constructor() {
    super();

    this.state = {
      klass: undefined,
      fetching: false,
      error: false,
      sessionExpired: false
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
      const klass = await fetchClass(
        this.props.user.student.class_id,
        this.props.user.student.webtoken
      );

      if (klass === "Session expired") {
        this.setState({
          sessionExpired: true
        });
        return;
      }

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
        <SessionExpired
          visible={this.state.sessionExpired}
          logout={this.props.logout}
        />
        <Text style={styles.headerText}>Settings</Text>
        <View style={styles.container}>
          {!this.props.user.student.class_id ? (
            <JoinClass
              updateUser={this.addToClassInState}
              id={this.props.user.student.id}
              webtoken={this.props.user.student.webtoken}
              logout={this.props.logout}
            />
          ) : (
            <ClassInfo
              updateUser={this.removeFromClassInState}
              data={this.state.klass}
              id={this.props.user.student.id}
              webtoken={this.props.user.student.webtoken}
              logout={this.props.logout}
            />
          )}
          <ChangePassword user={this.props.user} logout={this.props.logout} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "Malayalam Sangam MN",
    color: "#d5d5d5"
  }
});
