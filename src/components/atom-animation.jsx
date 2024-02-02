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

    getOrbitalHtml = (count) => {
        if (count === 1) {
            return <div id="s-orbital-path"></div>
        } else {
            return <>
                <div id="s-orbital-path"></div>
                <div id="s2-orbital-path"></div>
            </>
        }
    }

    getOrbitalCount = (atomicNo) => {
        let orbital_population = [
            2, 4, 10, 12, 18, 20, 30, 36, 38, 48, 54, 56, 70, 80, 86, 88, 102, 112, 118
        ]

        for (let i=0; i < orbital_population.length; i++) {
            if (atomicNo <= orbital_population[i]) return i+1;
        }
    }

    render () {
        
        let atom = this.props.atom;
        let orbitalCount = this.getOrbitalCount(this.props.atom.atomic_number)

        return (
            <div className='atom-details'>
                <div id="atom-container">
                    <div id="atom">
                        <div id="electron-1" className='electron'></div>
                        <div id="nucleus"></div>
                        {this.getOrbitalHtml(orbitalCount)}
                        <label id='ionic-charge' className='ghost'>+</label>
                        <div id="ionic-charge-anti-border" className='ghost'></div>
                    </div>
                </div>
                <IonToggleSwitch onHandleIonToggle={this.handleIonToggle} />
            </div>
        )
    }

}

export default AnimatedAtom;