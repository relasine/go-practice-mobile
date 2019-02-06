import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.deleteSection(id)}
        >
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 20,
    backgroundColor: "#4e577a",
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5
  },
  title: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 20,
    fontWeight: "bold",
    color: "#d5d7de",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8
  },
  labels: {
    fontFamily: "Malayalam Sangam MN",
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
    color: "#d5d7de",
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    fontFamily: "Malayalam Sangam MN",
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 8,
    color: "#8995b7",
    fontSize: 16
  },
  delete: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d7de",
    fontWeight: "bold",
    paddingTop: 8
  },
  button: {
    backgroundColor: "#8995b7",
    width: 220,
    paddingBottom: 4,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 16
  }
});
