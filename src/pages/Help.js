import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';

class Help extends Component {

      render() {
        return(
            <>
                <Header />
                <h1>Help</h1>
                <Sidenav />
            </>
        );
      }
}

export default Help;