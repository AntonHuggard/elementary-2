import React, { Component } from 'react'
import Element from './element'

class PeriodicTable extends Component {

    render() {
        return ( 
            <div className="periodic-table-wrapper">
                <div className={this.props.tableClasses}>
                    {this.props.atoms.atoms.map(atom => (
                        <Element 
                            key={atom.id} 
                            atom={atom}
                            onHandleClick={this.props.onHandleElementClick}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default PeriodicTable;