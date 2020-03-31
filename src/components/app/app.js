import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import '../app/app.css';

export default class App extends Component {

state = {
    todoItems: [
        {
            label: 'Попить кофе',
            important: false,
            id: 1
        },
        {
            label: 'React приложение',
            important: true,
            id: 2,
        },
        {
            label: 'Лечь спать',
            important: false,
            id: 3,
        },
        {
            label: 'Сходить поесть',
            important: true,
            id: 4,
        },


    ]
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
    console.log(`Добавлено - ${text}`);
};

render() {
    const {todoItems} = this.state;
    return (
        <div className = 'todo-app'>
            <AppHeader toDo = {2} done = {4}/>
            <div className = 'top-panel d-flex'>
            <SearchPanel />
            <ItemStatusFilter />
            </div>

            <TodoList todos = {todoItems} onDeleted = {this.deleteItem} />
            <ItemAddForm onAdded = {this.addItem} />
        </div>

    );
};

}
    
