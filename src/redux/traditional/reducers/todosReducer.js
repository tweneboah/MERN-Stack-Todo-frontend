import {
  ADD_TODO_FAIL,
  ADD_TODO_SUCCESS,
  ADD_TODO_RESET,
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_FAIL,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODO_FAIL,
  FETCH_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  ADD_TODO_REQUEST,
  FETCH_TODO_REQUEST,
  UPDATE_TODO_FAIL,
  UPDATE_TODO_RESET,
  DELETE_TODO_RESET,
} from '../actions/actionConstants';

//Add Todo
export const addTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return { loading: true };
    case ADD_TODO_SUCCESS:
      return { success: true, todo: action?.payload };
    case ADD_TODO_RESET:
      return {};
    case ADD_TODO_FAIL:
      return { loading: false, error: action?.payload };
    default:
      return state;
  }
};

//Fetch Todos
export const fetchTodosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { loading: true };
    case FETCH_TODOS_SUCCESS:
      return { success: true, todos: action?.payload };
    case FETCH_TODOS_FAIL:
      return { loading: false, error: action?.payload };
    default:
      return state;
  }
};

//Fetch Todo
export const fetchTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return { loading: true };
    case FETCH_TODO_SUCCESS:
      return { success: true, todo: action?.payload };

    case FETCH_TODO_FAIL:
      return { loading: false, error: action?.payload };
    default:
      return state;
  }
};

//Update Todo
export const updateTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TODO_REQUEST:
      return { loading: true };
    case UPDATE_TODO_SUCCESS:
      return { success: true, todo: action?.payload };
    case UPDATE_TODO_RESET:
      return {};
    case UPDATE_TODO_FAIL:
      return { loading: false, error: action?.payload };
    default:
      return state;
  }
};

//Delete Todo
export const deleteTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TODO_REQUEST:
      return { loading: true };
    case DELETE_TODO_SUCCESS:
      return { success: true, todo: action?.payload };
    case DELETE_TODO_RESET:
      return {};
    case DELETE_TODO_FAIL:
      return { loading: false, error: action?.payload };
    default:
      return state;
  }
};
