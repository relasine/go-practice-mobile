import React, { Component } from "react";
import { ScrollView, Text, TextInput, Image, StyleSheet } from "react-native";

export default class Settings extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Text>Settings</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {}
});
