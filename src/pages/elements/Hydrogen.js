import React, { Component } from 'react'
import Header from '../../components/Header';
import Sidenav from '../../components/SideNav';
import atoms from '../../components/atoms.json';
import {Helmet} from "react-helmet";
import hindenburg from '../../imgs/Hindenburg.jpg';

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
                  <h1>Hydrogen ({this.state.atom.symbol})</h1> 
                  <div className='atom-details'>
                    
                    <div id='atom-data'>
                      <p>Atomic number: {this.state.atom.id}</p>
                      <p>Atomic mass: {this.state.atom.atomic_mass}</p>   
                      <p>Row/Period N<sup>o</sup> : {this.state.atom.period}</p>   
                      <p>Group N<sup>o</sup> : {this.state.atom.group}</p>   
                    </div>
                    
                    <div id="atom-container">
                        <div id="atom">
                            <div id="electron-1" className='electron'></div>
                            <div id="nucleus"></div>
                            <div id="s-orbital-path"></div>
                        </div>
                    </div>
                    
                  </div>
                  
                  <div id="atom-description" >
                    <hr className='horizontal-line' />
                    <h3>About</h3>
                    <p>
                    Hydrogen is the first element and has smallest atomic mass. It is also the most abundant element in the universe. At standard conditions, it&apos;s a pretty boring colourless and odourless gas. On 6 May 1937 the German airship Hindenburg (filled with hydrogen gas) caught fire and killed 35 people. This marked the end of the airship era.
                    </p> 
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
                
            </>
        );
      }
}

export default Hydrogen;