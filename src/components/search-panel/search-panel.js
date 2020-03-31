import React from 'react'
import './search-panel';

const SearchPanel = () => {
    const searchText = 'type to search';
    const searchStyle = {
        fontSize: '15px'
    };
    return (     
        <input className = 'form-control search-input' style = {searchStyle} placeholder = {searchText}/>
    );
};

export default SearchPanel;