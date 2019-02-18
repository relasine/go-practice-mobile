import React, { Component } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class IncompleteCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
        >
          <View
            style={{
              backgroundColor: "#232323",
              height: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.text}>
              You must have a date, a goal, and at least one song to submit a
              practice card
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.props.closeModal}
            >
              <Text style={styles.submit}>Back</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    marginTop: 100,
    marginBottom: 16,
    textAlign: "center",
    color: "#d5d5d5"
  },
  button: {
    backgroundColor: "#333",
    width: 100,
    paddingBottom: 4,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 32
  },
  submit: {
    fontFamily: "Malayalam Sangam MN",
    fontSize: 18,
    textAlign: "center",
    color: "#d5d5d5",
    fontWeight: "bold",
    paddingTop: 8
  }
});
