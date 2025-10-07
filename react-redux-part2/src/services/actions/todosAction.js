import axios from "axios";
import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from "../constants/todosConstant";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// simple action creator
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: error
    }
}

// thunk action creator
const getAllTodos = () => {
    return async (dispatch) => {
        try {
            dispatch(getTodosRequest());
            const res = await axios.get(API_URL)
            dispatch(getTodosSuccess(res.data));
        } catch (error) {
            dispatch(getTodosFailure(error.message));
        }
    }
}

export { 
    getTodosRequest, 
    getTodosSuccess, 
    getTodosFailure, 
    getAllTodos 
};
