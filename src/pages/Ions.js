import React, { Component } from 'react';

class Ions extends Component {
    render () {
        return (
            <>
                <h1>Table of Ions</h1>
                <table>
                    <thead>
                        <tr>
                            <th>+1</th>
                            <th>+2</th>
                            <th>+3</th>
                            <th>-3</th>
                            <th>-2</th>
                            <th>-1</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NH<sub>4</sub><sup>+</sup></td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default Ions;