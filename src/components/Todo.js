import React from 'react';
import {
    deleteTodo,
    completeTodo
} from '../redux/store'
import {
    useDispatch
} from 'react-redux'
import {
    Button,
    Div,
    Li
} from "./styles";


function Todo({todo}){
    let dispatch = useDispatch();

    const deleteHandler = () =>{
        dispatch(deleteTodo(todo.id));
    }

    const completeHandler = () =>{
        dispatch(completeTodo(todo));
    }

    return (
    <Div todo>
        <Li complete={todo.complete} todoitem todolist>
            {todo.text}
        </Li>
        <Button onClick={completeHandler} complete>
            <i className="fas fa-check" />
        </Button>
        <Button onClick={deleteHandler} trash>
            <i className="fas fa-trash" />
        </Button>
    </Div>
    );
}

export default Todo;
