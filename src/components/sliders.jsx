import React, { Component } from 'react'
import electron from './imgs/btn-icon-electron.png';
import cloud from './imgs/btn-icon-cloud.png';
import drop from './imgs/btn-icon-drop.png';

class SliderMenu extends Component {

    render() {
        return ( 
            <div id='slider-menu'>
                <button onClick={ () => {this.props.onSelectQuery("en-slider")} }>
                    <img src={electron} alt="electronegativity symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>electroegativity</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("mp-slider")} }>
                    <img src={drop} alt="mp symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>melting point</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("bp-slider")} }>
                    <img src={cloud} alt="bp symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>boiling point</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("discovery")} }>discovery</button>
            </div>
        );
    }
}

export default SliderMenu;