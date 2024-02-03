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