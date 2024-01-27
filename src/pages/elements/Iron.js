import React, { Component } from 'react'
import Header from '../../components/Header';
import Sidenav from '../../components/SideNav';
import atoms from '../../components/atoms.json';
import {Helmet} from "react-helmet";

class Iron extends Component {

    state = {
      atom: atoms.atoms[25],
      units: "celsius",
      ion: 0,
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

      getElectrons = () => {
        let s1_electron = document.getElementById('s-elctr-1');
        let s2_electron = document.getElementById('s-elctr-2');
        let d2_electron = document.getElementById('d-elctr-2');
        return [s1_electron, s2_electron, d2_electron];
      }

      
      setToFe = () => {
        let electrons = this.getElectrons();
        electrons[0].classList.remove('ghost');
        electrons[1].classList.remove('ghost');
        electrons[2].classList.remove('ghost');
      }
      
      setToFeII = () => {
        let electrons = this.getElectrons();
        electrons[0].classList.add('ghost');
        electrons[1].classList.add('ghost');
        electrons[2].classList.remove('ghost');
      }

      setToFeIII = () => {
        let electrons = this.getElectrons();
        electrons[0].classList.add('ghost');
        electrons[1].classList.add('ghost');
        electrons[2].classList.add('ghost');
      }

      handleIon1Toggle = () => {
        if (this.state.ion !== 1) {
          this.setState({ ion : 1 });
          this.setToFeII();
          document.getElementById('ionBtn1').classList.add("active");
          document.getElementById('ionBtn2').classList.remove("active");
        } else {
          this.setState({ ion : 0 });
          this.setToFe();
          document.getElementById('ionBtn1').classList.remove("active");
          document.getElementById('ionBtn2').classList.remove("active");
        }      
      }

      handleIon2Toggle = () => {
        if (this.state.ion !== 2) {
          this.setState({ ion : 2 });
          this.setToFeIII();
          document.getElementById('ionBtn2').classList.add("active");
          document.getElementById('ionBtn1').classList.remove("active");
        } else {
          this.setState({ ion : 0 });
          this.setToFe();
          document.getElementById('ionBtn1').classList.remove("active");
          document.getElementById('ionBtn2').classList.remove("active");
        }      
      }

      render() {
        return(
            <>

                <Helmet>
                    <title>Iron</title>
                </Helmet>

                <Header language={this.state.language} pageSettings={false} />
                <Sidenav />

                <div id='content'>
                <h1>Iron ({this.state.atom.symbol})</h1>  
                  <div className='atom-details'>
                    
                    <div id="atom-container">
                        <div id="atom">
                            <div id="d-elctr-1" className="electron d-electr"></div>
                            <div id="d-elctr-2" className="electron d-electr"></div>
                            <div id="d-elctr-3" className="electron d-electr"></div>
                            <div id="d-elctr-5" className="electron d-electr"></div>
                            <div id="d-elctr-7" className="electron d-electr"></div>
                            <div id="d-elctr-9" className="electron d-electr"></div>

                            <div id="s-elctr-1" className="electron"></div>
                            <div id="s-elctr-2" className="electron"></div>

                            <div id="nucleus" className='transition-metal-nucleus'></div>
                            <div id="s-orbital-path"></div>
                            <div id="s2-orbital-path"></div>
                            <label id='ionic-charge' className='ghost'>2+</label>
                            <div id="ionic-charge-anti-border" className='ghost'></div>
                        </div>
                        <div id="atom-control">
                          <button onClick={this.handleIon1Toggle} id="ionBtn1">(II)</button>
                          <button onClick={this.handleIon2Toggle} id="ionBtn2">(III)</button>
                        </div>
                    </div>
                  </div>

                  <div id='atom-data'>
                      <p>Atomic number: {this.state.atom.id}</p>
                      <p>Atomic mass: {this.state.atom.atomic_mass}</p>   
                      <p>Row/Period N<sup>o</sup> : {this.state.atom.period}</p>   
                      <p>Group N<sup>o</sup> : {this.state.atom.group}</p>  
                      <p>Oxidation states: -4, -2, -1, +1, +2, +3, +4, +5, +6, +7</p> 
                  </div>

                  <hr className='horizontal-line' />
                  
                  <div>
                    <h3>Description & Facts</h3>
                    <p>
                    Iron, represented by the chemical symbol Fe, is a fundamental element crucial to the evolution of human civilization. Its history is intertwined with the rise of metallurgy, marking the transition from the Stone Age to the Iron Age around 1200 BCE. Iron's significance lies in its exceptional strength and versatility, making it essential for tools, weapons, and infrastructure. In its chemical composition, iron readily forms compounds such as iron oxide, commonly known as rust, when exposed to oxygen and moisture. The transformative impact of iron on societies, from the forging of weapons to the construction of railways, underscores its pivotal role in shaping human progress and technological advancement.
                    </p>
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

                  <hr className='horizontal-line' />
                  
                  <div>
                    <h3>Resources</h3>
                    <iframe className='youtube-video' title='video-2'
                      src="https://www.youtube.com/embed/euQUgp5AY-Y">
                    </iframe>
                    <h4 className='video-title'>Periodic Videos</h4>
                    
                  </div>

                </div>
                
            </>
        );
      }
}

export default Iron;