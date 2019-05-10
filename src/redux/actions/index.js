import actionType from "../constants/actionType";

let nextTodoId = 0;
export function addTodo(task) {
  return {
    type: actionType.ADD_TODO,
    id: ++nextTodoId,
    task
  };
}

export function toggleTodo(id) {
  return {
    type: actionType.TOGGLE_TODO,
    id
  };
}

export function deleteTodo(id) {
  return {
    type: actionType.DELETE_TODO,
    id
  };
}

export function updateTodo(id, task) {
  return {
    type: actionType.UPDATE_TODO,
    id,
    task
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: actionType.SET_VISIBILITY_FILTER,
    filter
  };
}
