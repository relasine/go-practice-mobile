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
      skills: "",
      length: "",
      incomplete: false
    };
  }

  submitSection = () => {
    const { piece, section, skills, length } = this.state;

    if (!piece || !section || !skills || !length) {
      this.setState({
        incomplete: true
      });
    } else {
      const newSection = { piece, section, skills, length, id: Date.now() };
      this.props.addNewSection(newSection);
      this.setState({
        piece: "",
        section: "",
        skills: "",
        length: "",
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

  handleSkillsPress = text => {
    this.setState({
      incomplete: false,
      skills: text
    });
  };

  handleSectionPress = text => {
    this.setState({
      incomplete: false,
      section: text
    });
  };

  handlelengthPress = length => {
    this.setState({
      incomplete: false,
      length
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
          placeholderTextColor="#707070"
        />
        <TextInput
          style={styles.input}
          placeholder="section worked on"
          onChangeText={text => this.handleSectionPress(text)}
          value={this.state.section}
          placeholderTextColor="#707070"
        />
        <TextInput
          style={styles.input}
          placeholder="skills focused on"
          onChangeText={text => this.handleSkillsPress(text)}
          value={this.state.skills}
          placeholderTextColor="#707070"
        />
        <TextInput
          style={styles.input}
          placeholder="length spent practicing"
          onChangeText={text => this.handlelengthPress(text)}
          value={this.state.length.toString()}
          keyboardType="number-pad"
          placeholderTextColor="#707070"
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
    backgroundColor: "rgba(0,0,0, 0.4)",
    width: width,
    padding: 16
  },
  input: {
    color: "#d5d5d5",
    fontSize: 20,
    marginTop: 8,
    backgroundColor: "#333",
    padding: 4
  },
  lengthWrapper: {
    paddingTop: 8
  },
  lengthLabel: {
    color: "#d5d5d5",
    fontSize: 20,
    fontWeight: "bold"
  },
  length: {
    color: "#848484",
    fontSize: 20,
    paddingBottom: 8
  },
  newSectionHeader: {
    color: "#d5d5d5",
    fontSize: 20,
    fontWeight: "bold"
  },
  submit: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d5d5",
    fontWeight: "bold",
    paddingTop: 8
  },
  button: {
    backgroundColor: "#333",
    width: 220,
    paddingBottom: 4,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 16
  }
});
