import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import PracticeCard from "./PracticeCard";
import Settings from "./Settings";
import Records from "./Records";
import Nav from "./Nav";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: "records"
    };
  }

  navigate = currentPage => {
    if (currentPage !== this.state.currentPage) {
      this.setState({
        currentPage
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.currentPage === "records" && (
          <Records user={this.props.user} updateUser={this.props.updateUser} />
        )}
        {this.state.currentPage === "practice card" && (
          <PracticeCard
            updateUser={this.props.updateUser}
            userId={this.props.user.student.id}
          />
        )}
        {this.state.currentPage === "settings" && <Settings />}
        <Nav navigate={this.navigate} />
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
