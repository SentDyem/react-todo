import React from 'react'
import TodoListItem from './todo-list-item';
const TodoList = ( { todos } ) => {
    const elements = todos.map((el) => {
        return (
            <li key = {el.id}> <TodoListItem {... el}/> </li>
        );
    });
    return (
        <ul>
            { elements }
        </ul>
    );
};

export default TodoList;