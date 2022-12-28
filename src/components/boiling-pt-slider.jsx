import React, { Component } from 'react'

class BoilingPtSlider extends Component {

    render() {
        return ( 
            <div id="boiling_pt_div" className="slider_div">
                <input 
                type="range" 
                min="-273" 
                max="6600" 
                className="slider" 
                id="BP_slider" 
                onChange={this.props.onHandleBoilingPoint} />
                <p id = "BP_display">0 &#176;C</p>
            </div>
        );
    }
}

export default BoilingPtSlider;