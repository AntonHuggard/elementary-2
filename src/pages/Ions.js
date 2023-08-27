import React, { Component } from 'react';
import Header from '../components/Header';
import Sidenav from '../components/SideNav';

class Ions extends Component {
    render () {
        return (
            <>
                <Header />
                <Sidenav />

                <div id='content'>
                    <h1>Table of Ions</h1>
                    <table id="ion-table" className="centre">
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
                                <td>Ca<sup>2+</sup></td>
                                <td>Al<sup>3+</sup></td>
                                <td></td>
                                <td>O<sup>2-</sup></td>
                                <td>OH<sup>-</sup></td>
                            </tr>
                            <tr>
                                <td>Na<sup>+</sup></td>
                                <td>Mg<sup>2+</sup></td>
                                <td>Fe<sup>3+</sup></td>
                                <td></td>
                                <td>S<sup>2-</sup></td>
                                <td>Cl<sup>-</sup></td>
                            </tr>
                            <tr>
                                <td>K<sup>+</sup></td>
                                <td>Cu<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td>CO<sub>3</sub><sup>2-</sup></td>
                                <td>I<sup>-</sup></td>
                            </tr>
                            <tr>
                                <td>Ag<sup>+</sup></td>
                                <td>Pb<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td>SO<sub>4</sub><sup>2-</sup></td>
                                <td>NO<sub>3</sub><sup>-</sup></td>
                            </tr>
                            <tr>
                                <td>H<sup>+</sup></td>
                                <td>Fe<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>HCO<sub>3</sub><sup>-</sup></td>
                            </tr>
                            <tr>
                                <td>Li<sup>+</sup></td>
                                <td>Ba<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>F<sup>-</sup></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Zn<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default Ions;