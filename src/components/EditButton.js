import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/Buttons.css'
import { ReactComponent as PencilIcon } from '../assets/Pencil.svg';

class EditButton extends Component {

    render() {
        return (
            <Link to={this.props.path}>
                <div className='edit-button'>
                    <PencilIcon style={{width: '1rem'}}/>
                </div>
            </Link>
        );
    }

};

EditButton.propTypes = {
    path: PropTypes.string.isRequired
}

export default EditButton;