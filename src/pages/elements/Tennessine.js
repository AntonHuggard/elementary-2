
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidenav from '../../components/SideNav';
import atoms from '../../components/atoms.json';
import AnimatedAtom from '../../components/atom-animation';
import {Helmet} from "react-helmet";

class Tennessine extends Component {

    state = {
      atom: atoms.atoms[116],
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

      handleIonToggle = () => {
        let electron1 = document.getElementById('electron-3');
        let electron2 = document.getElementById('electron-4');
        let electron3 = document.getElementById('electron-5');
        let electron4 = document.getElementById('electron-6');
        let ionThingText = document.getElementById('ionic-charge');
        let ionThingBorder = document.getElementById('ionic-charge-anti-border');

        electron1.classList.toggle('ghost');
        electron2.classList.toggle('ghost');
        electron3.classList.toggle('ghost');
        electron4.classList.toggle('ghost');
        ionThingText.classList.toggle('ghost');
        ionThingBorder.classList.toggle('ghost');        
      }

      render() {
        return(
            <>

                <Helmet>
                    <title>Tennessine</title>
                </Helmet>

                <Header language={this.state.language} pageSettings={false} />
                <Sidenav />

                <div id='content'>
                <h1>Tennessine ({this.state.atom.symbol})</h1>  
                    
                  <AnimatedAtom atom={this.state.atom} />

                  <div id='atom-data'>
                      <p>Atomic number: {this.state.atom.id}</p>
                      <p>Atomic mass: {this.state.atom.atomic_mass}</p>   
                      <p>Row/Period N<sup>o</sup> : {this.state.atom.period}</p>   
                      <p>Group N<sup>o</sup> : {this.state.atom.group}</p>   
                  </div>

                  <hr className='horizontal-line' />
                  
                  <div>
                    <h3>Description & Facts</h3>
                    <p dangerouslySetInnerHTML={{ __html: this.state.atom.description }} />
                  </div>

                  <hr className='horizontal-line' />
                  
                  <div>
                    <h3>Etymology</h3>
                    <p dangerouslySetInnerHTML={{ __html: this.state.atom.etymology }} />
                  </div>

                  <hr className='horizontal-line' />
                  
                  <div>
                    <h3>Discovery</h3>
                    <p dangerouslySetInnerHTML={{ __html: this.state.atom.discovery_details }} />
                  </div>

                </div>
                <Footer/>
                
            </>
        );
      }
}

export default Tennessine;
    