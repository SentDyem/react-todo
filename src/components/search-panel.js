import React from 'react'

const SearchPanel = () => {
    const searchText = 'Напиши сюда, шобы че нить найти бротан';
    const searchStyle = {
        fontSize: '15px'
    };
    return (        
        <input style = {searchStyle} placeholder= {searchText}/>
    );
};

export default SearchPanel;