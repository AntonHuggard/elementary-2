import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';
import atoms from '../components/atoms.json';
import {Helmet} from "react-helmet";
import hindenburg from '../imgs/Hindenburg.jpg';

class Hydrogen extends Component {

    state = {
      atom: atoms.atoms[0],
      units: "celsius",
      };
    
    

    handleToggleUnits = () => {
        console.log(this.state.units);
        switch(this.state.units) {
          case "celsius": 
            this.setState({ units : "fahrenheit" });
            break;
          case "fahrenheit": 
            this.setState({ units : "kelvin" });
            break;
          default:
            this.setState({ units : "celsius" });
        }
      }

      render() {
        return(
            <>

                <Helmet>
                    <title>Hydrogen</title>
                </Helmet>

                <Header language={this.state.language} pageSettings={false} />
                <Sidenav />

                <div id='content'>
                  <div className='atom-details'>
                    <h1>{this.state.atom.name} ({this.state.atom.symbol})</h1>  
                    <div id='atom-data'>
                      <p>Atomic number: {this.state.atom.id}</p>
                      <p>Atomic mass: {this.state.atom.atomic_mass}</p>   
                      <p>Row/Period N<sup>o</sup> : {this.state.atom.period}</p>   
                      <p>Group N<sup>o</sup> : {this.state.atom.group}</p>   
                    </div>
                    <div id="atom-container">
                        <div id="atom">
                            <div id="electron"></div>
                            <div id="nucleus"></div>
                            <div id="s-orbital-path"></div>
                        </div>
                    </div>
                    <div id="atom-description" >
                      <hr className='horizontal-line' />
                      <h3>Description & Facts</h3>
                      <p dangerouslySetInnerHTML={{ __html: this.state.atom.description }} />
                    </div>
                    <img id="historic-img" src={hindenburg} alt='Hindenburg disaster' />
                    <div id="atom-etymology">
                      <hr className='horizontal-line' />
                      <h3>Etymology</h3>
                      <p dangerouslySetInnerHTML={{ __html: this.state.atom.etymology }} />
                    </div>
                    <div id="atom-discovery">
                      <hr className='horizontal-line' />
                      <h3>Discovery</h3>
                      <p dangerouslySetInnerHTML={{ __html: this.state.atom.discovery_details }} />
                    </div>
                  </div>
                </div>
                
            </>
        );
      }
}

export default Hydrogen;