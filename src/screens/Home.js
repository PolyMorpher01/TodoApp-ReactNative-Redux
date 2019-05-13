import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import { connect } from "react-redux";

import TodoList from "../contianers/TodoList";
import AddTodo from "../contianers/AddTodo";
import color from "../constants/color";
import visibilityFilter from "../redux/constants/visibilityFilter";
import { setVisibilityFilter } from "../redux/actions";

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Todos",
      headerRight: navigation.getParam("renderFilterMenu")
    };
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
              this.props.dispatch(
                setVisibilityFilter(visibilityFilter.SHOW_ALL)
              )
            }
            text="Show All"
            style={{ padding: 10 }}
          />
          <MenuOption
            onSelect={() =>
              this.props.dispatch(
                setVisibilityFilter(visibilityFilter.SHOW_ACTIVE)
              )
            }
            text="Show Active"
            style={{ padding: 10 }}
          />
          <MenuOption
            onSelect={() =>
              this.props.dispatch(
                setVisibilityFilter(visibilityFilter.SHOW_COMPLETED)
              )
            }
            text="Show Completed"
            style={{ padding: 10 }}
          />
        </MenuOptions>
      </Menu>
    );
  }

  showDetail = todo => {
    this.props.navigation.navigate("Detail", {
      todo
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TodoList showDetail={this.showDetail} />
        <AddTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: color.WHITE
  }
});

export default connect()(Home);
