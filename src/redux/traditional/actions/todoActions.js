import axios from 'axios';
import baseURL from '../../../utils/baseURL';

import {
  ADD_TODO_FAIL,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_FAIL,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODO_FAIL,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  UPDATE_TODO_RESET,
  DELETE_TODO_RESET,
  ADD_TODO_RESET,
} from './actionConstants';

//Create Todo
const addTodoAction = todo => async dispatch => {
  try {
    dispatch({
      type: ADD_TODO_REQUEST,
    });

    const config = {
      headers: {
        contentType: 'application/json',
      },
    };
    const { data } = await axios.post(`${baseURL}/api/todos`, todo, config);

    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: data,
    });
    dispatch({
      type: ADD_TODO_RESET,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADD_TODO_FAIL,
      payload: message,
    });
  }
};

//Fetch Todos
const fetchTodosAction = todo => async dispatch => {
  try {
    dispatch({
      type: FETCH_TODOS_REQUEST,
    });

    const config = {
      headers: {
        contentType: 'application/json',
      },
    };
    const { data } = await axios.get(`${baseURL}/api/todos`, todo, config);

    dispatch({
      type: FETCH_TODOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FETCH_TODOS_FAIL,
      payload: message,
    });
  }
};

//Fetch Todo
const fetchTodoAction = id => async dispatch => {
  try {
    dispatch({
      type: FETCH_TODO_REQUEST,
    });

    const config = {
      headers: {
        contentType: 'application/json',
      },
    };
    const { data } = await axios.get(`${baseURL}/api/todos/${id}`, config);

    dispatch({
      type: FETCH_TODO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FETCH_TODO_FAIL,
      payload: message,
    });
  }
};

//Delete Todo
const deleteTodoAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_TODO_REQUEST,
    });

    const config = {
      headers: {
        contentType: 'application/json',
      },
    };
    const { data } = await axios.delete(`${baseURL}/api/todos/${id}`, config);

    dispatch({
      type: DELETE_TODO_SUCCESS,
      payload: data,
    });
    dispatch({
      type: DELETE_TODO_RESET,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DELETE_TODO_FAIL,
      payload: message,
    });
  }
};

//Update Todo
const updateTodoAction = (id, todo) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_TODO_REQUEST,
    });

    const config = {
      headers: {
        contentType: 'application/json',
      },
    };
    const { data } = await axios.put(
      `${baseURL}/api/todos/${id}`,
      todo,
      config
    );

    dispatch({
      type: UPDATE_TODO_SUCCESS,
      payload: data,
    });
    dispatch({
      type: UPDATE_TODO_RESET,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: UPDATE_TODO_FAIL,
      payload: message,
    });
  }
};

export {
  addTodoAction,
  updateTodoAction,
  deleteTodoAction,
  fetchTodoAction,
  fetchTodosAction,
};
