export function completeTodoAction(id) {
    return {
        type: 'completeTodos',
        payload: {
            id
        }
    };
}

export function deleteTodoAction(id) {
    return {
        type: 'deleteTodo',
        payload: {
            id
        }
    };
}

export function Login(email, password) {
    return {
        type: 'login',
        payload: {
            email,
            password
        }
    };
}


export function fetchTodosData(todos) {
    return {
        type: 'fetchTodoData',
        payload: {
            todos
        }
    };
}

export function fetchContactsData(contacts) {
    return {
        type: 'fetchContactsData',
        payload: {
            contacts
        }
    };
}

export function setLoginState(isLoggedIn) {
    return {
        type: 'setLoginState',
        payload: {
            isLoggedIn
        }
    };
}
