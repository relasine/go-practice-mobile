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

import NewSection from "./NewSection";
import DatePicker from "./DatePicker";
import Section from "./Section";

export default class PracticeCard extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1549427088449,
          piece: "#42 Jim Along Josie",
          section: "First half",
          skill: "Eight Note Rhythm",
          time: "12"
        }
      ],
      goals: "",
      date: ""
    };
  }

  handleGoalPress = goals => {
    this.setState({ goals });
  };

  addNewSection = section => {
    this.setState({
      sections: [...this.state.sections, section]
    });
  };

  deleteSection = id => {
    const newSections = this.state.sections.filter(section => {
      return section.id !== id;
    });
    this.setState({
      sections: newSections
    });
  };

  setDate = date => {
    this.setState({
      date
    });
  };

  render() {
    const totalTime = this.state.sections.reduce((sum, section) => {
      return sum + parseInt(section.time);
    }, 0);

    const practiceSections = this.state.sections.map((section, index) => {
      return (
        <Section
          data={section}
          deleteSection={this.deleteSection}
          key={`section #${index + 1}`}
        />
      );
    });

    return (
      <ScrollView style={styles.container}>
        <View style={styles.practiceCardTop}>
          <Text style={styles.headerText}>New Practice Record</Text>
          <Text style={styles.text}>Total Time - {totalTime} minutes</Text>
          <DatePicker setDate={this.setDate} />
          <TextInput
            placeholderTextColor="#8995b7"
            onChangeText={text => this.handleGoalPress(text)}
            style={styles.input}
            placeholder="Practice session goals"
            value={this.state.goals}
          />
          <TouchableOpacity style={styles.button} onPress={this.submitSection}>
            <Text style={styles.submit}>Submit Practice Record</Text>
          </TouchableOpacity>
        </View>
        <NewSection addNewSection={this.addNewSection} />
        <Text style={[styles.text, styles.sectionHeader]}>Songs Practiced</Text>
        {practiceSections}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch"
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "Malayalam Sangam MN",
    color: "#d5d7de"
  },
  practiceCardTop: {
    padding: 16
  },
  input: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 20,
    backgroundColor: "#3e496c",
    padding: 4
  },
  text: {
    fontSize: 20,
    fontFamily: "Malayalam Sangam MN",
    color: "#d5d7de",
    textAlign: "center"
  },
  sectionHeader: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 16,
    color: "#d5d7de"
  },
  submit: {
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
    alignSelf: "center"
  }
});
