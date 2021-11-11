import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as AddIcon } from '../assets/add_circle.svg';

import './styles/Buttons.css'

class LongButton extends Component {
    render() {
        return (
            <Link to={this.props.path || '#'} style={{ textDecoration: 'none' }}>
                <div onClick={this.props.onClick} className='long-button' style={{ backgroundColor: this.props.backgroundColor, color: this.props.textColor }}>
                    <p>{this.props.name}</p>
                    {this.props.icon && <AddIcon />}
                </div>
            </Link>
        );
    }

};

LongButton.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}

export default LongButton;
