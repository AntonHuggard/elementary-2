import React, { Component } from 'react'
import electron from '../imgs/btn-icon-electron.png';
import cloud from '../imgs/btn-icon-cloud-2.png';
import drop from '../imgs/btn-icon-drop2.png';
import binoculars from '../imgs/btn-icon-binoculars.png';

class SliderMenu extends Component {

    getSliderTitle(option) {
        switch (option) {
            case "mp-slider":
                return "melting point";
            case "bp-slider":
                return "boiling point";
            case "en-slider":
                return "electronegativity";
            case "discovery":
                return "year of discovery";
            default:
                return "&emsp;";
        }
    }

    render() {
        let sliderTitle = this.getSliderTitle(this.props.inputOption);

        const labelMP = (this.props.language !== "English") ? `pae rewa` : `melting Point`;
        const labelBP = (this.props.language !== "English") ? `hūnga` : `boiling Point`;
        const labelDiscovery = (this.props.language !== "English") ? `kitea` : `discovery details`;
        const labelEN = (this.props.language !== "English") ? `irahikotōraro` : `electronegativity`;

        return ( 
            <>
            <div id='slider-menu'>
                <button onClick={ () => {this.props.onSelectQuery("en-slider")} }>
                    <img src={electron} alt="electronegativity symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>{labelEN}</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("mp-slider")} }>
                    <img src={drop} alt="mp symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>{labelMP}</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("bp-slider")} }>
                    <img src={cloud} alt="bp symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>{labelBP}</span>
                    </button>
                <button onClick={ () => {this.props.onSelectQuery("discovery")} }>
                    <img src={binoculars} alt="discovery symbol" className='slider-menu-icon'/>
                    <span className='slider-menu-txt'>{labelDiscovery}</span>
                    </button>
            </div>
            <h2 id="slider-title" dangerouslySetInnerHTML={{ __html: sliderTitle }}></h2>
            </>
        );
    }
}

export default SliderMenu;