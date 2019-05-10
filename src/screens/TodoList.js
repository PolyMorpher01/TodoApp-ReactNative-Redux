import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { createStore } from "redux";

import AddTodo from "../components/AddTodo";
import TodoListItem from "../components/TodoListItem";
import color from "../constants/color";
import rootReducer from "../redux/reducers";
import { addTodo, toggleTodo, deleteTodo } from "../redux/actions";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class TodoList extends Component {
  static navigationOptions = { title: "Todos" };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  saveTodo = task => {
    store.dispatch(addTodo(task));
  };

  toggleTodo = id => {
    store.dispatch(toggleTodo(id));
  };

  deleteTodo = id => {
    store.dispatch(deleteTodo(id));
  };

  showDetail = todo => {
    this.props.navigation.navigate("Detail", {
      todo,
      store
    });
  };

  render() {
    let todoList = store.getState().todos;
    return (
      <View style={styles.container}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <TodoListItem
              store={store}
              todo={item}
              onDeleteTodo={this.deleteTodo}
              onShowDetail={this.showDetail}
              toggleTodo={this.toggleTodo}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />

        <View style={{ backgroundColor: color.VERY_LIGHT_GREY }}>
          <AddTodo
            updateTodoList={this.updateTodoList}
            saveTodo={this.saveTodo}
          />
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

export default TodoList;
