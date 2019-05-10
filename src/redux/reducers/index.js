import { combineReducers } from 'redux'

import todos from './todos';
import visibilityFilter from './visibilityFilter';

// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     }
// }

export default combineReducers({
    todos,
    visibilityFilter
});
