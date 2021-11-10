import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Table.css'

class Table extends Component {

    render() {
        return (
            <div className="table-container">
                <h1 className="table-title">{this.props.title}</h1>

                <div className="table-background">
                    <div className="table-header" style={(this.props.hasHeader) ? {display: 'flex'} : {display: 'none'}}>
                        {(this.props.hasHeader) && this.props.columns.map((el) => (
                            <p key={el}>{el}</p>
                        ))}
                    </div>

                    {this.props.rows.map((el) => (
                        <div className="table-item">
                            {el.map(function (value, index, array) {
                                return <p key={index}>{value}</p>
                            })
                            }
                        </div>

                    ))}

                </div>
            </div>
        );
    }

};

Table.propTypes = {
    title: PropTypes.string.isRequired,
    hasHeader: PropTypes.bool.isRequired,
    columns: PropTypes.array,
    rows: PropTypes.array.isRequired
}

export default Table;