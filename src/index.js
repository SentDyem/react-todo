import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import './components/index.css';

const App = () => {
    const todoItems = [
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


    ];
    return (
        <div className = 'todo-app'>
            <AppHeader toDo = {2} done = {4}/>
            <div className = 'top-panel d-flex'>
            <SearchPanel />
            <ItemStatusFilter />
            </div>

            <TodoList todos = {todoItems} />
        </div>

    );
};

ReactDOM.render(<App />, document.getElementById('root'));
