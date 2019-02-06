import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Section extends Component {
  render() {
    const { piece, section, skill, time, id } = this.props.data;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{piece}</Text>
        <Text style={styles.text}>
          <Text style={styles.labels}>Section practiced:</Text> {section}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.labels}>Skill developed:</Text> {skill}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.labels}>Time spent practing:</Text> {time} minutes
        </Text>
        <TouchableOpacity onPress={() => this.props.deleteSection(id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    fontWeight: "bold",
    color: "#d5d7de"
  },
  labels: {
    fontFamily: "Malayalam Sangam MN",
    fontWeight: "bold",
    marginTop: 8,
    color: "#8995b7"
  },
  text: {
    fontFamily: "Malayalam Sangam MN",

    color: "#8995b7"
  }
});
