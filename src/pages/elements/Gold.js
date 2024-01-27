import React, { Component } from 'react'
import Header from '../../components/Header';
import Sidenav from '../../components/SideNav';
import atoms from '../../components/atoms.json';
import IonToggleSwitch from '../../components/ion-toggle';
import {Helmet} from "react-helmet";
import tut from '../../imgs/Tutankhamun.jpg';

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
        let electron = document.getElementById('s-elctr-1');
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

                            <div id="s-elctr-1" class="electron"></div>

                            <div id="nucleus" className='transition-metal-nucleus'></div>
                            <div id="s-orbital-path"></div>
                            <div id="s2-orbital-path"></div>
                            <label id='ionic-charge' className='ghost'>+</label>
                            <div id="ionic-charge-anti-border" className='ghost'></div>
                        </div>
                        <IonToggleSwitch onHandleIonToggle={this.handleIonToggle} />
                    </div>
                  </div>

                  <div id='atom-data'>
                      <p>Atomic number: {this.state.atom.id}</p>
                      <p>Atomic mass: {this.state.atom.atomic_mass}</p>   
                      <p>Row/Period N<sup>o</sup> : {this.state.atom.period}</p>   
                      <p>Group N<sup>o</sup> : {this.state.atom.group}</p>  
                      <p>Oxidation states: -3, -2, -1, +1, +2, +3, +5</p> 
                  </div>

                  <hr className='horizontal-line' />
                  
                  <div>
                    <h3>Description & Facts</h3>
                    <p>
                    Gold has captivated humanity for millennia. Its chemical symbol, Au, is derived from the Latin word "aurum," meaning shining dawn. As a noble metal, gold stands out due to its remarkable resistance to corrosion and tarnish. This stability arises from its inertness, as gold does not readily react with oxygen or moisture, ensuring its eternal radiance.<br/>
                    <br/>
                    Historically, gold has been a symbol of wealth and power across civilizations. The ancient Egyptians revered it, using gold to craft intricate jewelry and burial masks for pharaohs, while the Greeks associated it with the gods, considering it divine and indestructible. The famed city of El Dorado in South America was believed to possess streets paved with gold, adding to the metal's mythical reputation.<br/>
                    <br/>
                    <img id="historic-img" src={tut} alt='Mask of Tutankhamun' />
                    The quest for gold has spurred exploration and conquest throughout history, leading to the California Gold Rush in the 19th century and shaping the economic landscapes of entire nations. Today, gold continues to be a symbol of luxury and a stable investment, embodying a fascinating blend of chemistry and history.
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
                    <p>RNZ's Elemental podcast <a href='https://www.rnz.co.nz/programmes/elemental/story/2018696439/gold-a-most-desirable-noble-metal'>Gold</a></p>
                    <iframe className='youtube-video' title='video-2'
                      src="https://www.youtube.com/embed/CTtf5s2HFkA">
                    </iframe>
                    <h4 className='video-title'>Gold bullion vault</h4>
                    <iframe className='youtube-video' title='video-3'
                      src="https://www.youtube.com/embed/7dF0QTzcuac">
                    </iframe>
                    <h4 className='video-title'>Gold watch</h4>
                  </div>

                </div>
                
            </>
        );
      }
}

export default Gold;