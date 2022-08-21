import React, { Component } from 'react'

class SliderMenu extends Component {

    render() {
        return ( 
            <div id='slider-menu'>
                <button onClick={ () => {this.props.onSelectQuery("en-slider")} }>electroegativity</button>
                <button onClick={ () => {this.props.onSelectQuery("mp-slider")} }>melting point</button>
                <button onClick={ () => {this.props.onSelectQuery("bp-slider")} }>boiling point</button>
                <button onClick={ () => {this.props.onDiscovery()} }>discovery</button>
            </div>
        );
    }
}

export default SliderMenu;