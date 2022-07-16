import React, { Component } from 'react'
import Element from './element'

class PeriodicTable extends Component {

    render() {
        return ( 
            <div className="periodic-table-wrapper">
                <div className="periodic-table">
                    {this.props.atoms.map(atom => (
                        <Element 
                            key={atom.id} 
                            atom={atom}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default PeriodicTable;