import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import '../app/app.css';

export default class App extends Component {

maxId = 100;

state = {
    todoItems: [
       this.createTodoItem('Разобрать проблему'),
        this.createTodoItem('React приложение'),
        this.createTodoItem('Выпить кофе'),
        this.createTodoItem('Сходить поесть'),
    ]
};

createTodoItem(text) {
    return {
            label: text,
            important: false,
            done: false,
            id: this.maxId++ 
    };
};

deleteItem = (id) => {
    this.setState(({todoItems}) => {
        const idx = todoItems.findIndex((el) => el.id === id);
        const newArray = [...todoItems.slice(0, idx), ...todoItems.slice(idx + 1)];

        return {
            todoItems: newArray
        }
    })
};
addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoItems}) => {
        const newArray = [...todoItems, newItem];
        return {
            todoItems: newArray
        }
    })
};

onToggleImportant = (id) => {
    console.log(`toggle important`, id);
};

onToggleDone = (id) => {
    this.setState(( {todoItems} ) => {

        const idx = todoItems.findIndex((el) => el.id === id);

        const oldItem = todoItems[idx];
        const newItem = { ...oldItem, done: !oldItem.done };
        const newArray = [...todoItems.slice(0, idx), newItem, ...todoItems.slice(idx + 1)];
        return {
            todoItems: newArray
        };

    }) 
};

render() {
    const doneCount = this.state.todoItems.filter((el) => el.done).length;
    const todoCount = this.state.todoItems.length - doneCount;
    const { todoItems } = this.state;
    return (
        <div className = 'todo-app'>
            <AppHeader toDo = {todoCount} done = {doneCount}/>
            <div className = 'top-panel d-flex'>
            <SearchPanel />
            <ItemStatusFilter />
            </div>

            <TodoList todos = {todoItems} onDeleted = {this.deleteItem} onToggleImportant = {this.onToggleImportant}
             onToggleDone = {this.onToggleDone} />
            <ItemAddForm onAdded = {this.addItem} />
        </div>

    );
};

}
    
