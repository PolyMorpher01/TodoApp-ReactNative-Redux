import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

import CheckBox from "./CheckBox";
import color from "../constants/color";

class TodoListItem extends Component {
  renderMenu = todo => {
    return (
      <Menu>
        <MenuTrigger text="..." style={{ padding: 8 }} />
        <MenuOptions>
          <MenuOption
            onSelect={() => this.props.showDetail(todo)}
            text="View Detail"
            style={styles.menuOption}
          />
          <MenuOption
            onSelect={() => this.props.deleteTodo(todo.id)}
            text="Delete"
            style={styles.menuOption}
          />
        </MenuOptions>
      </Menu>
    );
  };

  render() {
    let todo = this.props.todo;
    let textColor = todo.isCompleted ? color.LIGHT_GREY : color.BLACK;
    let textDecorationLine = todo.isCompleted ? "line-through" : "none";
    return (
      <TouchableHighlight
        style={styles.itemContainer}
        underlayColor={color.LIST_ITEM_UDERLAY}
        onPress={() => this.props.toggleTodo(todo.id)}
      >
        <View style={styles.item}>
          <CheckBox
            data={todo}
            style={styles.checkBox}
            onCheckBoxPressed={() => this.props.toggleTodo(todo.id)}
          />
          <Text
            style={[
              styles.itemText,
              { color: textColor, textDecorationLine: textDecorationLine }
            ]}
          >
            {todo.task}
          </Text>
          {this.renderMenu(todo)}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  checkBox: {
    flex: 1
  },
  itemText: {
    fontSize: 18,
    flex: 1
  },
  menuOption: {
    padding: 10
  }
});

TodoListItem.prototypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default TodoListItem;
