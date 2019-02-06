import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Picker,
  Dimensions
} from "react-native";

export default class NewSection extends Component {
  constructor() {
    super();

    this.state = {
      piece: "",
      section: "",
      skill: "",
      time: "",
      incomplete: false
    };
  }

  submitSection = () => {
    const { piece, section, skill, time } = this.state;

    if (!piece || !section || !skill || !time) {
      this.setState({
        incomplete: true
      });
    } else {
      const newSection = { piece, section, skill, time, id: Date.now() };
      this.props.addNewSection(newSection);
      this.setState({
        piece: "",
        section: "",
        skill: "",
        time: "",
        incomplete: false,
        showDial: false
      });
    }
  };

  handlePiecePress = text => {
    this.setState({
      incomplete: false,
      piece: text
    });
  };

  handleSkillPress = text => {
    this.setState({
      incomplete: false,
      skill: text
    });
  };

  handleSectionPress = text => {
    this.setState({
      incomplete: false,
      section: text
    });
  };

  handleTimePress = time => {
    this.setState({
      incomplete: false,
      time
    });
  };

  toggleTicker = () => {
    this.setState({
      showDial: !this.state.showDial
    });
  };

  render() {
    let pickerItems = [];

    for (let i = 0; i < 61; i++) {
      pickerItems.push(
        <Picker.Item key={`number-picker-${i}`} label={`${i}`} value={`${i}`} />
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.newSectionHeader}>
          Add a new song to your practice session:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="song practiced"
          onChangeText={text => this.handlePiecePress(text)}
          value={this.state.piece}
          placeholderTextColor="#8995b7"
        />
        <TextInput
          style={styles.input}
          placeholder="section worked on"
          onChangeText={text => this.handleSectionPress(text)}
          value={this.state.section}
          placeholderTextColor="#8995b7"
        />
        <TextInput
          style={styles.input}
          placeholder="skill focused on"
          onChangeText={text => this.handleSkillPress(text)}
          value={this.state.skill}
          placeholderTextColor="#8995b7"
        />
        <TextInput
          style={styles.input}
          placeholder="time spent practicing"
          onChangeText={text => this.handleTimePress(text)}
          value={this.state.time.toString()}
          keyboardType="number-pad"
          placeholderTextColor="#8995b7"
        />

        <TouchableOpacity style={styles.button} onPress={this.submitSection}>
          <Text style={styles.submit}>Add Song</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3e496c",
    width: width,
    padding: 16,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5
  },
  input: {
    color: "#d5d7de",
    fontSize: 20,
    marginTop: 8,
    backgroundColor: "#2c3753",
    padding: 4
  },
  timeWrapper: {
    paddingTop: 8
  },
  timeLabel: {
    color: "#d5d7de",
    fontSize: 20,
    fontWeight: "bold"
  },
  time: {
    color: "#d5d7de",
    fontSize: 20,
    paddingBottom: 8
  },
  newSectionHeader: {
    color: "#d5d7de",
    fontSize: 20,
    fontWeight: "bold"
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
    alignSelf: "center",
    marginTop: 16
  }
});
