import React, { Component } from 'react'
import './search-panel';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {

        const term = e.target.value;
     this.setState({term});
     this.props.onSearchChange(term);   
    }

    render() {
    const searchText = 'type to search';
    const searchStyle = {
    fontSize: '15px'
    };
    return (     
        <input className = 'form-control search-input' style = {searchStyle}

         placeholder = {searchText}
         value = {this.state.term}
         onChange = {this.onSearchChange} />

    );
    }
};