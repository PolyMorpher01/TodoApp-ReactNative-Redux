import React, { Component } from "react";
import { FlatList, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

import AddTodo from "../components/AddTodo";
import TodoListItem from "../components/TodoListItem";
import color from "../constants/color";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setVisibilityFilter
} from "../redux/actions";
import visibilityFilter from "../redux/constants/visibilityFilter";

const mapStateToProps = state => {
  return {
    todoList: getVisibleTodos(state.todos, state.visibilityFilter)
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
    },

    setVisibilityFilter: filter => {
      dispatch(setVisibilityFilter(filter));
    }
  };
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilter.SHOW_ALL:
      return todos;
    case visibilityFilter.SHOW_COMPLETED:
      return todos.filter(todo => todo.isCompleted);
    case visibilityFilter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isCompleted);
  }
};

class TodoList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Todos",
      headerRight: navigation.getParam("renderFilterMenu")
    };
  };
  showDetail = todo => {
    this.props.navigation.navigate("Detail", {
      todo
    });
  };

  componentDidMount() {
    this.props.navigation.setParams({
      renderFilterMenu: this.renderFilterMenu()
    });
  }

  renderFilterMenu() {
    return (
      <Menu>
        <MenuTrigger text="..." style={{ padding: 10 }} />
        <MenuOptions>
          <MenuOption
            onSelect={() =>
              this.props.setVisibilityFilter(visibilityFilter.SHOW_ALL)
            }
            text="Show All"
            style={{ padding: 10 }}
          />
          <MenuOption
            onSelect={() =>
              this.props.setVisibilityFilter(visibilityFilter.SHOW_ACTIVE)
            }
            text="Show Active"
            style={{ padding: 10 }}
          />
          <MenuOption
            onSelect={() =>
              this.props.setVisibilityFilter(visibilityFilter.SHOW_COMPLETED)
            }
            text="Show Completed"
            style={{ padding: 10 }}
          />
        </MenuOptions>
      </Menu>
    );
  }

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
  },
  menuOption: {
    padding: 10
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
