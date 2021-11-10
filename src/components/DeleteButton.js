import React, { Component } from 'react';
import './styles/Buttons.css'
import { ReactComponent as TrashIcon } from '../assets/TrashCan.svg';

class DeleteButton extends Component {

    render() {
        return (
            <div className='delete-button'>
                <TrashIcon style={{ width: '1rem' }} />
            </div>
        );
    }

};

export default DeleteButton;