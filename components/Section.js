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
    const { piece, section, skill, length, id } = this.props.data;
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
          <Text style={styles.labels}>Time spent practing:</Text> {length}{" "}
          minutes
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
    backgroundColor: "#232323"
  },
  title: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 20,
    fontWeight: "bold",
    color: "#d5d5d5",
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
    color: "#d5d5d5",
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    fontFamily: "Malayalam Sangam MN",
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 8,
    color: "#c1c1c1",
    fontSize: 16
  },
  delete: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
    paddingTop: 8
  },
  button: {
    backgroundColor: "#d5d5d5",
    width: 220,
    paddingBottom: 4,
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 16
  }
});
