import React, { Component } from 'react'

class MeltingPtSlider extends Component {

    render() {
        return ( 
            <div id="melting_pt_div" className="slider_div">
                <input 
                type="range" 
                min="-273" 
                max="3800" 
                className="slider" 
                id="MP_slider" 
                onChange={this.props.onHandleMeltingPoint} />
                <p id = "MP_display">0 &#176;C</p>
            </div>
        );
    }
}

export default MeltingPtSlider;