import React, { Component } from 'react';
import IonToggleSwitch from '../components/ion-toggle';

class AnimatedAtom extends Component {

    handleIonToggle = () => {
        let electron = document.getElementById('electron-1');
        let ionThingText = document.getElementById('ionic-charge');
        let ionThingBorder = document.getElementById('ionic-charge-anti-border');

        electron.classList.toggle('ghost');
        ionThingText.classList.toggle('ghost');
        ionThingBorder.classList.toggle('ghost');        
    }

    render () {
        return (
            <div className='atom-details'>
                <div id="atom-container">
                    <div id="atom-graphics">
                    <div id="atom">
                            <div id="electron-1" className='electron'></div>
                            <div id="nucleus"></div>
                            <div id="s-orbital-path"></div>
                            <label id='ionic-charge' className='ghost'>+</label>
                            <div id="ionic-charge-anti-border" className='ghost'></div>
                        </div>
                    </div>

                    <IonToggleSwitch onHandleIonToggle={this.handleIonToggle} />
                </div>
            </div>
        )
    }

}

export default AnimatedAtom;