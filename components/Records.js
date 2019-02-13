import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";

import { getSessionDetails, removeSession } from "../utilities/fetchCalls";

import PracticeRecord from "./PracticeRecord";
import PracticeRecordDetails from "./PracticeRecordDetails";

export default class Records extends Component {
  constructor() {
    super();

    this.state = {
      selectedRecord: undefined,
      fetching: false
    };
  }

  getDetails = async session => {
    this.setFetching();

    try {
      const sections = await getSessionDetails(session.id);

      const selectedRecord = { sections, session };

      if (selectedRecord === "Invalid parameters") {
        throw Error;
      }

      this.setState({
        selectedRecord,
        fetching: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  deletePracticeSession = async id => {
    try {
      const response = await removeSession(id);

      this.props.updateUser();
      this.clearModal();
    } catch (error) {
      console.log(error);
    }
  };

  clearModal = () => {
    this.setState({
      selectedRecord: undefined,
      fetching: false,
      error: false
    });
  };

  setFetching = () => {
    this.setState({
      fetching: true
    });
  };

  render() {
    let records = [...this.props.user.sessions];

    records.sort((a, b) => {
      let aSplit = a.date.split("-");
      let bSplit = b.date.split("-");

      return new Date(bSplit) - new Date(aSplit);
    });

    const practiceRecords = records.map(session => {
      return (
        <PracticeRecord
          key={session.id}
          data={session}
          getDetails={this.getDetails}
        />
      );
    });

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Practice Records</Text>
        {practiceRecords}
        {this.state.selectedRecord && (
          <PracticeRecordDetails
            data={this.state.selectedRecord}
            clear={this.clearModal}
            deletePracticeSession={this.deletePracticeSession}
          />
        )}
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
    color: "#d5d5d5"
  }
});
