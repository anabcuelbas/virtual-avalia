import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchBar.css'
import { ReactComponent as SearchIcon } from '../assets/Search.svg';

class SearchBar extends Component {

    render() {
        return (
            <div className="search-container">
                <input className="search-input" placeholder={this.props.placeholder} />
                <div className="search-button">
                    <SearchIcon style={{width: '1rem'}}/>
                </div>
            </div>
        );
    }

};

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired
}

export default SearchBar;
