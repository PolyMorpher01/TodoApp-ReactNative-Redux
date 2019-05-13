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
      let maximumId = getMaxId(state);
      action.id = ++maximumId;
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

getMaxId = state => {
  if (state === null || Object.entries(state).length === 0) return 0;
  return Math.max.apply(Math, state.map(s => s.id), 1);
};

export default todos;
