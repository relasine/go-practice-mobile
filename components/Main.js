import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import PracticeCard from "./PracticeCard";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: "practice card"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.currentPage === "practice card" && <PracticeCard />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1
  }
});
