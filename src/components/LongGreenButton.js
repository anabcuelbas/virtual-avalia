import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/Buttons.css'

class LongGreenButton extends Component {

    render() {
        return (
            <Link to={this.props.path} style={{ textDecoration: 'none' }}>
                <div className='long-green-button'>
                    <p>{this.props.name}</p>
                </div>
            </Link>
        );
    }

};

LongGreenButton.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default LongGreenButton;