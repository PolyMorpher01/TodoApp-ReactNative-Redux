import actionType from "../constants/actionType";
import visibility from "../constants/visibilityFilter";

const visibilityFilter = (state = visibility.SHOW_ALL, action) => {
  switch (action.type) {
    case actionType.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
