import React, { Component } from 'react'
import radioactiveImg from '../imgs/radioactive.png';
import maoriData from '../components/atoms-maori.json';
import getElectronConfig from './electron-config';

class Modal extends Component {
    
    state = {
        mouseOver: false,
    }

    closeModal = () => {
        const modal = document.getElementById('element-modal');
        modal.classList.toggle('hide-me');
    }

    handler = () => {
        if (! this.state.mouseOver) this.closeModal();
    }

    mouseEnter = () => {this.setState({ mouseOver : true });}
    mouseExit = () => {this.setState({ mouseOver : false });}
      

    render() {
        if (this.props.element) {
            
            const units = this.props.units;
            const known_mp = this.props.element.melting_point === 9999 ? false : true;
            const known_bp = this.props.element.boiling_point === 9999 ? false : true;
            const mp = this.props.onConvertTemp(this.props.element.melting_point, 0, units);
            const bp = this.props.onConvertTemp(this.props.element.boiling_point, 0, units);
            const real_units = this.props.onGetUnitSymbol(units);
            const melting_pt = known_mp? mp + real_units : "<em>unknown</em>";
            const boiling_pt = known_bp? bp + real_units : "<em>unknown</em>";
            const electron_config = getElectronConfig(this.props.element.atomic_number); //  bookmark
            const isRadioactive = this.props.element.radioactive;

            const nonmetals_colour = "rgb(223, 0, 0)";
            const alkali_metals_colour = "rgb(219, 102, 6)";
            const alkaline_earth_metals_clour = "rgb(223, 182, 0)";
            const metaux_pauvres_colour = "rgb(5, 148, 5)";
            const metalloid_colour = "rgb(0, 179, 90)";
            const nonmetal_colour = "#7c4cdb";
            const lanthanoid_colour = "#5900b3";
            const actinoid_colour = "#000099";
            const noble_gas_colour = "rgb(99, 0, 124)";
            const unknown_colour = "rgb(34, 34, 34)";
            const transition_metal_colour = "rgb(21, 49, 85)";
        
            let fill_colour = "rgb(223, 0, 0)";
            const text_colour = "white";

            switch (this.props.element.primary_class) {
                case 'non-metal':
                    fill_colour = nonmetals_colour;
                    break;
                case 'alkali-metal':
                    fill_colour = alkali_metals_colour;
                    break;
                case 'noble_gas':
                    fill_colour = noble_gas_colour;
                    break;
                case 'alkaline-earth-metal':
                    fill_colour = alkaline_earth_metals_clour;
                    break;
                case 'metalloid':
                    fill_colour = metalloid_colour;
                    break;
                case 'non-metals':
                    fill_colour = nonmetal_colour;
                    break;
                case 'metaux_pauvres':
                    fill_colour = metaux_pauvres_colour;
                    break;
                case 'lanthanoid':
                    fill_colour = lanthanoid_colour;
                    break;
                case 'actinoid':
                    fill_colour = actinoid_colour;
                    break;
                case 'unknown':
                    fill_colour = unknown_colour;
                    break;
                default:
                    fill_colour = transition_metal_colour;
            }

            const svg = `
                    <style>
                        .chemical_symbol { 
                            font: bold 90px sans-serif !important;
                            fill: ${text_colour};
                        }
                        .number {
                            font: bold 40px sans-serif;
                            fill: ${text_colour};
                        }
                    </style>
                    <rect width = "100%" height = "100%" style = "fill: white" />
                    <rect x = "5%" y = "3%" width = "90%" height = "94%" style = "fill: ${fill_colour}" />
                    <text x="75%" y="15%" dominant-baseline="middle" text-anchor="middle" class="number">${this.props.element.atomic_number}</text>
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="chemical_symbol">${this.props.element.symbol}</text>
                    <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" class="number">${this.props.element.atomic_mass}</text>
                `;

            const radioactiveClasses = isRadioactive? "radioactive-symbol": "radioactive-symbol hide-me";

            const atomIndex = this.props.element.atomic_number - 1;
            const maoriAtom = maoriData.atoms[atomIndex];
            const elementName = this.props.language === "en"? this.props.element.name : maoriAtom.name;
            let discDetails = this.props.language === "en"? this.props.element.discovery_details : this.props.element.discovery_date;
            if (discDetails === 0) discDetails = "he wa roa i mua";
            const etymology = this.props.language === "en"? this.props.element.etymology : maoriAtom.etymology;

            const labelAtomicNo = (this.props.language === "mi") ? `Tau iraoho` : `Atomic Number`;
            const labelAtomicMass = (this.props.language === "mi") ? `Tau karihi (o te ngota)` : `Relative Atomic Mass`;
            const labelMP = (this.props.language === "mi") ? `Pae rewa` : `Melting Point`;
            const labelBP = (this.props.language === "mi") ? `Hūnga` : `Boiling Point`;
            const labelElectronConfig = (this.props.language === "mi") ? `Irahiko whakatakoto` : `E<sup>-</sup> configuration`;
            const labelDiscovery = (this.props.language === "mi") ? `Kitea` : `Discovery date`;
            const labelEN = (this.props.language === "mi") ? `Irahikotōraro` : `Electronegativity`;

            return ( 
                <div 
                    id="element-modal" className="hide-me" 
                    onClick={this.handler} >
                    <div className= "modal_content"
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseExit}>
                        <div className= "grid-container">
                            <div className= "modal-header">{elementName}</div>
                            <button className= "modal-exit-btn" onClick={this.closeModal}>&times;</button>
                            <svg className="modal-svg" width="100%" height="300" dangerouslySetInnerHTML={{ __html: svg }} />
                            <div className= "modal-text-data">
                                {labelAtomicNo}: {this.props.element.atomic_number} <br/> 
                                {labelAtomicMass}: {this.props.element.atomic_mass} <br/> 
                                {labelMP}: <span dangerouslySetInnerHTML={{ __html: melting_pt }} /> <br/>
                                {labelBP}: <span dangerouslySetInnerHTML={{ __html: boiling_pt }} /> <br/> 
                                {labelEN}: {this.props.element.electronegativity} <br/>
                                <span dangerouslySetInnerHTML={{ __html: labelElectronConfig }}></span>: <span dangerouslySetInnerHTML={{ __html: electron_config }} /> <br/>
                                <div className="mobile_radioactive_indictaion">Radioactive: {this.props.element.radioactive}</div>
                                {labelDiscovery}: <span dangerouslySetInnerHTML={{ __html: discDetails }} /> <br/>
                                Etymology: <span dangerouslySetInnerHTML={{ __html: etymology }} /> <br/>
                            </div>
                            <img className={radioactiveClasses} src={radioactiveImg} alt='radioactive symbol' />
                        </div>
                        {/* <div className= "item7">{this.props.element.name}</div> */}
                    </div>
                </div>
            );
        }
        return ( 
            <div id="element-modal" className="hide-me"></div>
        );
    }
}

export default Modal;