import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Landing from "./components/Landing";
import PracticeCard from "./components/PracticeCard";
import Main from "./components/Main";

import { fetchStudentData } from "./utilities/fetchCalls";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: undefined,
      error: true
    };
  }

  updateUser = async () => {
    try {
      const user = await fetchStudentData(this.state.user.student.id);

      this.setState({ user, error: false });
      return;
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  setUser = user => {
    this.setState({ user });
  };
  render() {
    return (
      <View style={styles.container}>
        {!this.state.user && <Landing setUser={this.setUser} />}
        {this.state.user && (
          <Main updateUser={this.updateUser} user={this.state.user} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3753",
    alignItems: "center"
  }
});
