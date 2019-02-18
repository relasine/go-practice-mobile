import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import Landing from "./components/Landing";
import Main from "./components/Main";

import { fetchStudentData } from "./utilities/fetchCalls";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: undefined,
      error: false
    };
  }

  logout = () => {
    this.setState({
      user: undefined,
      error: false
    });
  };

  updateUser = async () => {
    console.log("fires");
    try {
      const user = await fetchStudentData(
        this.state.user.student.id,
        this.state.user.student.webtoken
      );

      this.setState({ user, error: false });
      return;
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  setUser = (user, webtoken) => {
    this.setState({ user, webtoken });
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./assets/clarinet.jpg")}
        resizeMode="cover"
      >
        {!this.state.user && <Landing setUser={this.setUser} />}
        {this.state.user && (
          <Main
            updateUser={this.updateUser}
            user={this.state.user}
            logout={this.logout}
          />
        )}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000"
  }
});
