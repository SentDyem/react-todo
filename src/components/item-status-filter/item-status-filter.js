import React, {Component} from 'react'
import './item-status-filter.css';

class ItemStatusFilter extends Component {
    buttons = [
        { name: 'All', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ]
    render()
    {
        const { filter } = this.props;
        const buttons = this.buttons.map( ( {name, label} ) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
            <button type = 'button' className = {`btn btn-info ${clazz}`} key = {name}> {label} </button>
            );
        });
        const { closeItems } = this.props;
        return (
            <div className = 'btn-group'>
               { buttons }
            </div> 
    
        )
    };
}


export default ItemStatusFilter;