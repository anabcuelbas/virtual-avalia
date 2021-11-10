import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Table.css'
import CheckBox from './CheckBox';

class Table extends Component {

    render() {
        return (
            <div className="table-container">
                <div className="table-background">
                    <div className="table-header" style={(this.props.hasHeader) ? { display: 'flex' } : { display: 'none' }}>
                        {(this.props.hasHeader) && this.props.columns.map((el) => (
                            <p key={el}>{el}</p>
                        ))}
                    </div>

                    {this.props.rows.map((el) => (
                        <div className="table-item">
                            {this.props.selectionButton && <CheckBox />}
                            <div className="item-text">
                                {el.map(function (value, index, array) {
                                    return <p key={index}>{value}</p>
                                })
                                }
                            </div>
                            <div className="item-buttons">
                                {this.props.buttons.map(function (value, index, array) {
                                    return <p key={index}>{value}</p>
                                })
                                }
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        );
    }

};

Table.propTypes = {
    hasHeader: PropTypes.bool.isRequired,
    columns: PropTypes.array,
    rows: PropTypes.array.isRequired,
    hasButtons: PropTypes.bool.isRequired,
    buttons: PropTypes.array,
    selectionButton: PropTypes.bool
}

export default Table;