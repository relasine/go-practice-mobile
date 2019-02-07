import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Landing from "./components/Landing";
import PracticeCard from "./components/PracticeCard";
import Main from "./components/Main";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: undefined
    };
  }

  setUser = user => {
    this.setState({ user });
  };
  render() {
    return (
      <View style={styles.container}>
        {!this.state.user && <Landing setUser={this.setUser} />}
        {this.state.user && <Main user={this.state.user} />}
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
