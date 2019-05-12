import { connect } from "react-redux";

import { addTodo } from "../redux/actions";
import AddTodo from "../components/AddTodo";

const mapDispatchToProps = dispatch => {
  return {
    saveTodo: task => {
      dispatch(addTodo(task));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
