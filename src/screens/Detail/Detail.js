import React, { Component } from "react";
import { Text, View, TextInput, TouchableHighlight } from "react-native";
import styles from './style';

import color from "../../constants/color";
import { updateTodo } from "../../redux/actions";
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

export default connect()(Detail);
