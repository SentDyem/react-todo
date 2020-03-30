import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    const todoItems = [
        {
            label: 'Попить кофе',
            important: false,
            id: 1
        },
        {
            label: 'Разработать React приложение',
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
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {todoItems} />
        </div>

    );
};

ReactDOM.render(<App />, document.getElementById('root'));
