import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import {
  addTodoReducer,
  deleteTodoReducer,
  fetchTodoReducer,
  fetchTodosReducer,
  updateTodoReducer,
} from './reducers/todosReducer';

const reducer = combineReducers({
  addTodo: addTodoReducer,
  todoList: fetchTodosReducer,
  todo: fetchTodoReducer,
  deleteTodo: deleteTodoReducer,
  updateTodo: updateTodoReducer,
});

//initial state
const initialState = {
  todos: [],
};

//Middleware
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
