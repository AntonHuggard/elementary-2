import React, { Component } from 'react';
import IonToggleSwitch from '../components/ion-toggle';
import orbitalPopulation from '../components/orbitalPopulations.js';

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
        const orbital_ids = [
            "s-orbital-path", "s2-orbital-path", "p2-orbital-path", "s3-orbital-path", "p3-orbital-path",
            "s4-orbital-path", "d3-orbital-path", "p4-orbital-path", "s5-orbital-path", "d4-orbital-path", 
            "p5-orbital-path", "s6-orbital-path", "f4-orbital-path", "d5-orbital-path", "p6-orbital-path", 
            "s7-orbital-path", "f5-orbital-path", "d6-orbital-path", "p7-orbital-path", 
        ];
        let htmlArray = [];
        for (let i=0; i < count; i++) {
            htmlArray.push(<div className="electron-orbital" id={orbital_ids[i]}></div>);
        }
        return htmlArray;
    }

    getOrbitalCount(count) {
        // returns the number of orbital rings given atomic number/number of electrons/whatever

        let orbital_sizes = orbitalPopulation();

        for (let i=0; i < orbital_sizes.length; i++) {
            if (count <= orbital_sizes[i].size) return i+1;
        }
    }

    getElectronHtml = (atomicNo) => {
        let htmlArray = [];
        for (let i = 1; i <= atomicNo; i++) {
            let electronID = "electron-" + (i);
            let electronClasses = "electron orbital-" + this.getOrbitalCount(i);

            htmlArray.push(<div className={electronClasses} id={electronID}></div>);
            console.log(electronID);
        }
        return htmlArray;
    }

    render () {
        
        const atom = this.props.atom;
        const orbitalCount = this.getOrbitalCount(atom.atomic_number);
        const nucleusClass = atom.primary_class + "-nucleus";

        return (
            <div className='atom-details'>
                <div id="atom-container">
                    <div id="atom">
                        {this.getElectronHtml(atom.atomic_number)}
                        <div id="nucleus" className={nucleusClass}></div>
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