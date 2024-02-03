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
        const orbital_ids = [
            "s-orbital-path", "s2-orbital-path", "p2-orbital-path", "s3-orbital-path", "p3-orbital-path",
            "s4-orbital-path", "d3-orbital-path", "p4-orbital-path", "s5-orbital-path", "d4-orbital-path", 
            "p5-orbital-path", "s6-orbital-path", "f4-orbital-path", "d5-orbital-path", "p6-orbital-path", 
            "s7-orbital-path", "f5-orbital-path", "d6-orbital-path", "p7-orbital-path", 
        ]
        let htmlArray = []
        for (let i=0; i < count; i++) {
            htmlArray.push(<div className="electron-orbital" id={orbital_ids[i]}></div>)
        }
        return htmlArray;
    }

    getOrbitalPopulations = () => {
        let max_shell = 19;
        let limit = 1;
        let to_add = 1;
        let hit_limit = false;
        let result = 0;
        let orbital_population = [];
        for (let i=1; i <= max_shell; i++) {
            result = result + to_add;
            if (to_add === 1) {
                if (hit_limit) {
                    limit = limit + 2;
                    hit_limit = false;
                } 
                else hit_limit = true;
                to_add = limit;
            } else to_add = to_add - 2;
            orbital_population.push(result);
        }
        let orbital_sizes = orbital_population.map(o => o*2);
        return orbital_sizes;
    }

    getOrbitalCount = (atomicNo) => {
        let orbital_sizes = this.getOrbitalPopulations();
        console.log(orbital_sizes);

        for (let i=0; i < orbital_sizes.length; i++) {
            if (atomicNo <= orbital_sizes[i]) return i+1;
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