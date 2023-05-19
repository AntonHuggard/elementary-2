import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';

class About extends Component {

      render() {
        return(
            <>
                <Header />
                <h1>About</h1>
                <Sidenav />
            </>
        );
      }
}

export default About;