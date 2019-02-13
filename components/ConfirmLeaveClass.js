import React, { Component } from "react";
import { StyleSheet, Modal, View, Text, TouchableOpacity } from "react-native";

export default class ConfirmLeaveClass extends Component {
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
              Are you sure you want to leave this class?
            </Text>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.props.cancel}
              >
                <Text style={styles.submit}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.props.leaveClass}
              >
                <Text style={styles.submit}>Leave</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  buttonWrapper: {
    flexDirection: "row"
  },
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
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16
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
