import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Modal
} from "react-native";

import PracticeSectionDetails from "./PracticeSectionDetails";

export default class PracticeRecordDetails extends Component {
  render() {
    const { nextGoal, date, totalTime, id } = this.props.data.session;
    const { sections } = this.props.data;
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

    const renderSections = sections.map(section => {
      return <PracticeSectionDetails key={section.id} data={section} />;
    });

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.selectedRecord}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        style={styles.container}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>Practice Session Details</Text>

            <Text style={styles.text}>
              <Text style={styles.label}>Date: </Text>
              {months[parseInt(splitDate[1]) - 1]} {parseInt(splitDate[2])},{" "}
              {splitDate[0]}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Goal: </Text>
              {nextGoal}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Length: </Text>
              {totalTime} minutes
            </Text>
            <Text style={styles.subHeader}>Songs practiced:</Text>
            {renderSections}
            <TouchableHighlight
              onPress={() => {
                this.props.clear();
              }}
            >
              <Text style={[styles.exitButton, styles.label]}>Exit</Text>
            </TouchableHighlight>
          </View>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => this.props.deletePracticeSession(id)}
          >
            <Text style={[styles.exitButton, styles.label]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flex: 1,
    padding: 30,
    paddingTop: 40
  },
  headerText: {
    color: "#d5d5d5",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 32,
    fontWeight: "bold"
  },
  text: {
    color: "#d5d5d5",
    fontSize: 16
  },
  label: {
    fontWeight: "bold"
  },
  exitButton: {
    marginTop: 16,
    textAlign: "center",
    color: "#d5d5d5",
    fontSize: 20
  },
  subHeader: {
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
    color: "#d5d5d5",
    fontSize: 20,
    fontWeight: "bold"
  },
  delete: {
    marginTop: 16
  }
});
