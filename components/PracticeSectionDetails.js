import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class PracticeSectionDetails extends Component {
  render() {
    const { length, piece, section, skills } = this.props.data;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.label}>Song practiced: </Text>
          {piece}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Skills focused: </Text>
          {skills}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Sections worked on: </Text>
          {section}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Time practiced: </Text>
          {length} minutes
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    padding: 16,
    marginBottom: 16
  },

  text: {
    color: "#d5d5d5",
    fontSize: 16
  },
  label: {
    fontWeight: "bold"
  }
});
