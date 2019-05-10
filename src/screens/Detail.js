import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

import color from "../constants/color";
import { updateTodo } from "../redux/actions";
import { connect } from "react-redux";

class Detail extends Component {
  static navigationOptions = {
    title: "Todo Detail"
  };

  state = {
    task: null
  };

  todo = this.props.navigation.getParam("todo", null);

  componentDidMount() {
    this.setState({
      task: this.todo.task
    });
  }

  updateTodo = () => {
    console.log("update");
    this.props.dispatch(updateTodo(this.todo.id, this.state.task));
  };

  render() {
    let completedStatus = "Not Completed";
    if (this.state.isCompleted) {
      completedStatus = "Completed";
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.task}
          onChangeText={text => this.setState({ task: text })}
        />

        <TextInput
          style={[styles.textInput, styles.mulitLineTextInput]}
          placeholder="Add a Note"
          multiline={true}
          maxLength={40}
          // value={this.state.note}
          onChangeText={text => this.setState({ note: text })}
        />
        <View style={styles.isCompletedContainer}>
          <Text style={{ fontSize: 18 }}>Status: </Text>
          <Text style={{ fontSize: 18 }}>{completedStatus}</Text>
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.updateTodo();
            this.props.navigation.goBack();
          }}
          underlayColor={color.BUTTON_UNDERLAY}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: color.WHITE
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
  mulitLineTextInput: {
    height: 80
  },
  isCompletedContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
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

export default connect()(Detail);
