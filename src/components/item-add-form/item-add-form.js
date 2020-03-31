import React, {Component} from 'react';
import '../item-add-form/item-add-form.css';

export default class ItemAddForm extends Component { 

    render() {
        const { onAdded } = this.props;
        const info = 'Введите новое дело';
        return (
            <div className = 'item-add-form'>
                <button className = 'btn btn-outline-secondary' onClick = { () => onAdded('Отлично работает') }>Добавить</button>
            </div>
        )
    }
}