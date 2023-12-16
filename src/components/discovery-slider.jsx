import React, { Component } from 'react'

class DiscoverySlider extends Component {

    render() {
        return ( 
            <div id="discovery_div" className="slider_div not-selectable">
                <input 
                type="range" 
                min="1600" 
                max="2020" 
                className="slider" 
                id="discovery_timeline" 
                onChange={this.props.onHandleDiscovery} />
                <p id = "date_display">1600</p>
            </div>
        );
    }
}

export default DiscoverySlider;