import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import AddTodo from "../components/AddTodo";
import TodoListItem from "../components/TodoListItem";
import color from "../constants/color";
import { addTodo, toggleTodo, deleteTodo } from "../redux/actions";

const mapStateToProps = state => {
  return {
    todoList: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveTodo: task => {
      dispatch(addTodo(task));
    },

    toggleTodo: id => {
      dispatch(toggleTodo(id));
    },

    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

class TodoList extends Component {
  static navigationOptions = { title: "Todos" };
  showDetail = todo => {
    this.props.navigation.navigate("Detail", {
      todo
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todoList}
          renderItem={({ item }) => (
            <TodoListItem
              todo={item}
              onDeleteTodo={this.props.deleteTodo}
              onShowDetail={this.showDetail}
              toggleTodo={this.props.toggleTodo}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />

        <View style={{ backgroundColor: color.VERY_LIGHT_GREY }}>
          <AddTodo saveTodo={this.props.saveTodo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: color.WHITE
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flex: 1
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: color.GREY,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
