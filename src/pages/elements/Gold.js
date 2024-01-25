import React, { Component } from 'react'
import Header from '../../components/Header';
import Sidenav from '../../components/SideNav';
import atoms from '../../components/atoms.json';
import {Helmet} from "react-helmet";

class Gold extends Component {

    state = {
      atom: atoms.atoms[46],
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
        let electron = document.getElementById('electron-3');
        let ionThingText = document.getElementById('ionic-charge');
        let ionThingBorder = document.getElementById('ionic-charge-anti-border');

        electron.classList.toggle('ghost');
        ionThingText.classList.toggle('ghost');
        ionThingBorder.classList.toggle('ghost');        
      }

      render() {
        return(
            <>

                <Helmet>
                    <title>Gold</title>
                </Helmet>

                <Header language={this.state.language} pageSettings={false} />
                <Sidenav />

                <div id='content'>
                <h1>Gold ({this.state.atom.symbol})</h1>  
                  <div className='atom-details'>
                    <div id='atom-data'>
                      <p>Atomic number: {this.state.atom.id}</p>
                      <p>Atomic mass: {this.state.atom.atomic_mass}</p>   
                      <p>Row/Period N<sup>o</sup> : {this.state.atom.period}</p>   
                      <p>Group N<sup>o</sup> : {this.state.atom.group}</p>  
                      <p>Oxidation states: -3, -2, -1, +1, +2, +3, +5</p> 
                    </div>
                    <div id="atom-container">
                        <div id="atom">
                            <div id="d-elctr-1" class="electron d-electr"></div>
                            <div id="d-elctr-2" class="electron d-electr"></div>
                            <div id="d-elctr-3" class="electron d-electr"></div>
                            <div id="d-elctr-4" class="electron d-electr"></div>
                            <div id="d-elctr-5" class="electron d-electr"></div>
                            <div id="d-elctr-6" class="electron d-electr"></div>
                            <div id="d-elctr-7" class="electron d-electr"></div>
                            <div id="d-elctr-8" class="electron d-electr"></div>
                            <div id="d-elctr-9" class="electron d-electr"></div>
                            <div id="d-elctr-10" class="electron d-electr"></div>

                            <div id="nucleus" className='transition-metal-nucleus'></div>
                            <div id="s-orbital-path"></div>
                            <div id="s2-orbital-path"></div>
                            <label id='ionic-charge' className='alkali-metal-txt ghost'>+</label>
                            <div id="ionic-charge-anti-border" className='ghost'></div>
                        </div>
                        <div id="atom-control">
                          <label>show ion</label>
                          <label className="switch">
                              <input type="checkbox" onClick={this.handleIonToggle}/>
                              <span className="toggle round"></span>
                          </label>
                        </div>
                    </div>
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
                
            </>
        );
      }
}

export default Gold;