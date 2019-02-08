import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class PracticeRecord extends Component {
  render() {
    const { nextGoal, date, totalTime, id } = this.props.data;
    const splitDate = date.split("-");

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.getDetails(this.props.data)}
        >
          <Text style={styles.text}>
            <Text style={styles.label}>Date: </Text>
            {months[parseInt(splitDate[1]) - 1]} {parseInt(splitDate[2]) + 1},{" "}
            {splitDate[0]}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Practice time: </Text>
            {totalTime} minutes
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Goal: </Text>
            {nextGoal}
          </Text>
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
    shadowRadius: 5,
    padding: 8
  },
  text: {
    color: "#d5d7de",
    fontSize: 16,
    padding: 4
  },
  label: {
    fontWeight: "bold"
  }
});
