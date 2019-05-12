import { connect } from "react-redux";

import { toggleTodo, deleteTodo } from "../redux/actions";
import TodoListItem from "../components/TodoListItem";

const mapStateToProps = (state, ownProps) => ({
  todo: ownProps.todo
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    },
    showDetail: ownProps.showDetail
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem);
