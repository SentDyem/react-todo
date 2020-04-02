import React, {Component} from 'react'
import './item-status-filter.css';

class ItemStatusFilter extends Component {
    render()
    {
        const { closeItems } = this.props;
        return (
            <div className = 'btn-group'>
                <button type = 'button' className = 'btn btn-info'>
                    All
                </button>
                    
                    <button type = 'button' className = 'btn btn-outline-secondary' onClick = { closeItems }>
                        Closed
                </button>
    
                    <button type = 'button' className = 'btn btn-outline-secondary'>
                        Active
                </button>
            </div> 
    
        )
    };
}


export default ItemStatusFilter;