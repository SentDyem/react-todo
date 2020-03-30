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
        },
        {
            label: 'Разработать React приложение',
            important: true,
        },
        {
            label: 'Лечь спать',
            important: false,
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
