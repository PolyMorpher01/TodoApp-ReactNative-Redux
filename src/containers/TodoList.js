import { connect } from "react-redux";

import { setVisibilityFilter } from "../redux/actions";
import visibilityFilter from "../redux/constants/visibilityFilter";
import TodoList from "../components/TodoList";

const mapStateToProps = state => {
  return {
    todoList: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
