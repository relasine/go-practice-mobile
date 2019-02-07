import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

import ModalDatePicker from "react-native-datepicker-modal";

export default class DatePicker extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const months = [
      "",
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
      <ModalDatePicker
        onDateChanged={date => this.props.setDate(date)}
        style={styles.container}
        renderDate={({ year, month, day, date }) => {
          if (!date) {
            return (
              <Text style={[styles.text, styles.placeholderText]}>
                Set practice date
              </Text>
            );
          }

          const dateStr = `${months[parseInt(month)]} ${day}, ${year}`;
          return <Text style={styles.text}>Practice date: {dateStr}</Text>;
        }}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16
  },
  text: {
    fontSize: 20,
    fontFamily: "Malayalam Sangam MN",
    color: "#d5d7de",
    textAlign: "center",
    fontWeight: "bold"
  }
});
