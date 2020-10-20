import {
    createStore,
    applyMiddleware
} from 'redux';
import reducer from './reducer';
import {
    fetchTodosData,
    fetchContactsData,
    setLoginState,
    deleteTodoAction,
    addTodoAction,
    completeTodoAction
} from './actions';
import axios from 'axios';

const thunkMiddleware = require('redux-thunk').default;

//fetching todos from server
const fetchTodos = () => {
    return function(dispatch) {
        axios.get('http://localhost:8000/todos')
            .then(response => {
                dispatch(fetchTodosData(response.data))
            })
            .catch(error => {
                console.log('Unable to fetch todos!')
            })

    }
}

//fetching contacts from server
const fetchContacts = () => {
    return function(dispatch) {
        axios.get('http://localhost:8000/contacts')
            .then(response => {
                dispatch(fetchContactsData(response.data))
            })
            .catch(error => {
                console.log('Unable to fetch contacts!')
            })

    }
}

export function Login(email, password) {
    return function(dispatch) {
        axios.post('http://localhost:8000/auth/login', {
                email: email,
                password: password
            })
            .then(response => {
                dispatch(setLoginState(response.data.authorized))
            })
            .catch(error => {
                alert('Login Failed', 'Email or Password is incorrect');
            });
    }
}

export function deleteTodo(id) {
    return function(dispatch) {
        axios.delete('http://localhost:8000/todos/' + id)
            .then(response => {
                dispatch(deleteTodoAction(id))
            })
            .catch(error => {
                alert('Unable to delete!');
            });
    }
}

export function addTodo(desc) {
    return function(dispatch) {
        axios.post('http://localhost:8000/todos', {
                'text': desc,
                'complete': false
            })
            .then(response => {
                dispatch(fetchTodos())
            })
            .catch(error => {
                alert('Unable to add!');
            });
    }
}

export function completeTodo(todo) {
    return function(dispatch) {
        axios.put('http://localhost:8000/todos/' + todo.id, {
                ...todo,
                'complete': !todo.complete
            })
            .then(response => {
                dispatch(completeTodoAction(todo.id))
            })
            .catch(error => {
                alert('Unable to update!');
            });
    }
}


export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchTodos());
store.dispatch(fetchContacts());