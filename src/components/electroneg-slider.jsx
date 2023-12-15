import React, { Component } from 'react'

class ElectronegSlider extends Component {

    render() {
        return ( 
            <div id="electronegativity_div" className="slider_div not-selectable">
            <input 
              type="range" 
              min="0" 
              max="400" 
              className="slider" 
              id="EN_slider" 
              onChange={this.props.onHandleElectronegativity} 
              />
            <p id = "EN_display">drag slider <span class='desktop-only-text'>to change electronegativity</span></p>
        </div>
        );
    }
}

export default ElectronegSlider;