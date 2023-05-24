import React, { Component } from 'react'
import electron from '../imgs/btn-icon-electron.png';
import cloud from '../imgs/btn-icon-cloud-2.png';
import drop from '../imgs/btn-icon-drop2.png';
import binoculars from '../imgs/btn-icon-binoculars.png';

class SliderMenu extends Component {

    render() {
        return ( 
            <div id='slider-menu'>
                <button onClick={ () => {this.props.onSelectQuery("en-slider")} }>
                    <img src={electron} alt="electronegativity symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>electronegativity</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("mp-slider")} }>
                    <img src={drop} alt="mp symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>melting point</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("bp-slider")} }>
                    <img src={cloud} alt="bp symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>boiling point</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("discovery")} }>
                    <img src={binoculars} alt="discovery symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>disovery</span>
                    </button>
            </div>
        );
    }
}

export default SliderMenu;