import React from 'react';
import Todo from './Todo'
import {
    useSelector
} from 'react-redux'

function TodoList() {
    let todos = useSelector(state => state.todos);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (<Todo todo={todo} key={todo.id} />))}
            </ul>
        </div>
    );
}

export default TodoList;
