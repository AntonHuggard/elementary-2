import React, { Component } from 'react'

class SliderMenu extends Component {

    render() {
        return ( 
            <div id='slider-menu'>
                <button onClick={ this.props.onElectrong() }>electroegativity</button>
                <button onClick={ this.props.onMeltingPt() }>melting point</button>
                <button onClick={ this.props.onBoilingPt() }>boiling point</button>
                <button onClick={ this.props.onDiscovery() }>discovery</button>
            </div>
        );
    }
}

export default SliderMenu;