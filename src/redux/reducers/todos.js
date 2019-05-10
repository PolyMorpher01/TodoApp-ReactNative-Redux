import actionType from "../constants/actionType";

const todo = (state, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return {
        id: action.id,
        task: action.task,
        isCompleted: false
      };

    case actionType.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        isCompleted: !state.isCompleted
      };

    case actionType.UPDATE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        task: action.task
      };

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return [...state, todo(undefined, action)];

    case actionType.TOGGLE_TODO:
      return state.map(t => todo(t, action));

    case actionType.DELETE_TODO: {
      return state.filter(item => item.id !== action.id);
    }

    case actionType.UPDATE_TODO: {
      return state.map(t => todo(t, action));
    }

    default:
      return state;
  }
};

export default todos;
