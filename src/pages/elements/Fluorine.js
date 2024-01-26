import React, { Component } from 'react'
import Header from '../../components/Header';
import Sidenav from '../../components/SideNav';
import atoms from '../../components/atoms.json';
import {Helmet} from "react-helmet";

class Fluorine extends Component {

    state = {
      atom: atoms.atoms[8],
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
        let electron10 = document.getElementById('electron-10');
        let ionThingText = document.getElementById('ionic-charge');
        let ionThingBorder = document.getElementById('ionic-charge-anti-border');

        electron10.classList.toggle('ghost');
        ionThingText.classList.toggle('ghost');
        ionThingBorder.classList.toggle('ghost');        
      }

      

      render() {
        return(
            <>

                <Helmet>
                    <title>Fluorine</title>
                </Helmet>

                <Header language={this.state.language} pageSettings={false} />
                <Sidenav />

                <div id='content'>
                <h1>Fluorine ({this.state.atom.symbol})</h1>  
                  <div className='atom-details'>
                    <div id='atom-data'>
                      <p>Atomic number: {this.state.atom.id}</p>
                      <p>Atomic mass: {this.state.atom.atomic_mass}</p>   
                      <p>Row/Period N<sup>o</sup> : {this.state.atom.period}</p>   
                      <p>Group N<sup>o</sup> : {this.state.atom.group}</p>   
                    </div>
                    <div id="atom-container">
                        <div id="atom">
                            <div id="electron-1" className="electron"></div>
                            <div id="electron-2" className="electron"></div>
                            
                            <div id="electron-3a" className="electron"></div>
                            <div id="electron-4a" className="electron"></div>
                            <div id="electron-5a" className="electron"></div>
                            <div id="electron-6a" className="electron"></div>
                            
                            <div id="electron-7" className="electron"></div>
                            <div id="electron-8" className="electron"></div>
                            <div id="electron-9" className="electron"></div>
                            <div id="electron-10" className="electron ghost"></div>
                            
                            <div id="nucleus" className=''></div>
                            <div id="s-orbital-path"></div>
                            <div id="s2-orbital-path"></div>
                            <label id='ionic-charge' className='ghost'>1-</label>
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

export default Fluorine;