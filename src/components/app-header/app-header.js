import React from 'react';
import '../app-header/app-header.css';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className = 'app-header d-flex'>
            <h1>Мои дела</h1>
    <h2>{toDo} дел, из {done} завершено </h2>
        </div>     
    );
};

export default AppHeader;