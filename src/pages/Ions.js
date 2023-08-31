import React, { Component } from 'react';
import Header from '../components/Header';
import Sidenav from '../components/SideNav';

class Ions extends Component {
    render () {
        return (
            <>
                <Header />
                <Sidenav pageSettings={false} />

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
                                <td>
                                    NH<sub>4</sub><sup>+</sup>
                                    <br/>
                                    Ammonium
                                </td>
                                <td>Ca<sup>2+</sup></td>
                                <td>Al<sup>3+</sup></td>
                                <td></td>
                                <td>
                                    O<sup>2-</sup>
                                    <br/>
                                    Oxide
                                </td>
                                <td>
                                    OH<sup>-</sup>
                                    <br/>
                                    Hydroxide
                                </td>
                            </tr>
                            <tr>
                                <td>Na<sup>+</sup></td>
                                <td>Mg<sup>2+</sup></td>
                                <td>Fe<sup>3+</sup></td>
                                <td></td>
                                <td>
                                    S<sup>2-</sup>
                                    <br/>
                                    Sulfide
                                </td>
                                <td>
                                    Cl<sup>-</sup>
                                    <br/>
                                    Chloride
                                </td>
                            </tr>
                            <tr>
                                <td>K<sup>+</sup></td>
                                <td>Cu<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td>
                                    CO<sub>3</sub><sup>2-</sup>
                                    <br/>
                                    Carbonate
                                </td>
                                <td>
                                    I<sup>-</sup>
                                    <br/>
                                    Iodide
                                </td>
                            </tr>
                            <tr>
                                <td>Ag<sup>+</sup></td>
                                <td>Pb<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td>
                                    SO<sub>4</sub><sup>2-</sup>
                                    <br/>
                                    Sulfate
                                </td>
                                <td>
                                    NO<sub>3</sub><sup>-</sup>
                                    <br/>
                                    Nitrate
                                </td>
                            </tr>
                            <tr>
                                <td>H<sup>+</sup></td>
                                <td>Fe<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    HCO<sub>3</sub><sup>-</sup>
                                    <br/>
                                    Bicarbonate
                                </td>
                            </tr>
                            <tr>
                                <td>Li<sup>+</sup></td>
                                <td>Ba<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    F<sup>-</sup>
                                    <br/>
                                    Fluoride
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Zn<sup>2+</sup></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    CH<sub>3</sub>COO<sup>-</sup>
                                    <br/>
                                    acetate
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default Ions;