import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import color from "../constants/color";

class AddTodo extends Component {
  state = {
    newTask: ""
  };

  saveTodo = () => {
    const newTask = this.state.newTask.trim();
    if (newTask === "") {
      return;
    }
    this.props.saveTodo(newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onSubmitEditing={this.saveTodo}
          placeholder="Add a todo"
          value={this.state.newTask}
          onChangeText={text => this.setState({ newTask: text })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.VERY_LIGHT_GREY,
    padding: 12
  },
  textInput: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: color.VERY_LIGHT_GREY,
    borderRadius: 8,
    backgroundColor: color.WHITE,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    height: 44,
    backgroundColor: color.APP_THEME,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 1,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  }
});

AddTodo.prototypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default AddTodo;
