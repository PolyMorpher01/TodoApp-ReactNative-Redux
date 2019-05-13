import React, { Component } from "react";
import { FlatList } from "react-native";

import TodoItem from "../containers/TodoItem";

class TodoList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.todoList}
        renderItem={({ item }) => (
          <TodoItem todo={item} showDetail={this.props.showDetail} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

export default TodoList;
