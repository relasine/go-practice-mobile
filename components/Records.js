import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";

import PracticeRecord from "./PracticeRecord";

export default class Records extends Component {
  render() {
    const practiceRecords = this.props.user.sessions.map(session => {
      return <PracticeRecord key={session.id} data={session} />;
    });

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Practice Records</Text>
        {practiceRecords}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
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
