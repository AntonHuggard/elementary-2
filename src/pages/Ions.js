import React, { Component } from 'react';
import Header from '../components/Header';
import Sidenav from '../components/SideNav';
import ions from '../components/ions.json';
import IonTable from '../components/itable';
import {Helmet} from "react-helmet";

class Ions extends Component {

    state = {
        ions: ions.ions
    }

    render () {
        return (
            <>
                <Helmet>
                    <title>Table of Ions</title>
                </Helmet>
                <Header />
                <Sidenav pageSettings={false} />

                <div id='content'>
                    <h1>Table of Ions</h1>
                    <IonTable ions={this.state.ions} ></IonTable>
                </div>
            </>
        );
    }
}

export default Ions;