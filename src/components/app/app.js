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
    ],
    term: '',
    filter: 'active'
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
    this.setState(({todoItems}) => {
        return {
            todoItems: this.toggleProperty(todoItems, id, 'important')
        }        
    })

};

onToggleDone = (id) => {
    this.setState(( {todoItems} ) => {

        return {
            todoItems: this.toggleProperty(todoItems, id, 'done')
        };

    }) 
};

toggleProperty(arr, id, propName) {

        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
        
};

search(items, term) {
    if (term.length === 0)
    {
        return items;
    }
    return items.filter((item) => {
        return item.label.indexOf(term) > -1
    })
}

onSearchChange = (term => {
    this.setState({term});

});

filter (items, filter) {
    switch (filter) {
        case 'all':
            return items;
        case 'active':
            return items.filter((item) => !item.done);
        case 'done':
            return items.filter((item) => item.done);
        default:
            return items;
    }
}

render() {
    const doneCount = this.state.todoItems.filter((el) => el.done).length;
    const todoCount = this.state.todoItems.length - doneCount;
    const { todoItems, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoItems, term), filter);
    return (
        <div className = 'todo-app'>
            <AppHeader toDo = {todoCount} done = {doneCount}/>
            <div className = 'top-panel d-flex'>
            <SearchPanel onSearchChange = {this.onSearchChange} />
            <ItemStatusFilter closeItems = {this.toCloseFilter} filter = {filter} />
            </div>

            <TodoList todos = {visibleItems} onDeleted = {this.deleteItem} onToggleImportant = {this.onToggleImportant}
             onToggleDone = {this.onToggleDone} />
            <ItemAddForm onAdded = {this.addItem} />
        </div>

    );
};

}
    
