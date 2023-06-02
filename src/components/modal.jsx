import React, { Component } from 'react'

class Modal extends Component {

    closeModal = () => {
        const modal = document.getElementById('element-modal');
        modal.classList.toggle('hide-me');
    }

    render() {
        if (this.props.element) {
            
            const units = this.props.units;
            const melting_pt = this.props.onConvertTemp(this.props.element.melting_point, 0, units);
            const boiling_pt = this.props.onConvertTemp(this.props.element.boiling_point, 0, units);
            const real_units = this.props.onGetUnitSymbol(units);

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

            return ( 
                <div id="element-modal" className="hide-me">
                    <div className= "modal_content">
                        <div className= "grid-container">
                            <div className= "item1">{this.props.element.name}</div>
                            <button className= "item2" onClick={this.closeModal}>&times;</button>
                            <svg className="item3" width="100%" height="300" dangerouslySetInnerHTML={{ __html: svg }} />
                            <div className= "item4">
                                Atomic Number: {this.props.element.atomic_number} <br/> 
                                Relative Atomic Mass: {this.props.element.atomic_mass} <br/> 
                                Melting Point: {melting_pt} <span dangerouslySetInnerHTML={{ __html: real_units }} /> <br/>
                                Boiling Point: {boiling_pt} <span dangerouslySetInnerHTML={{ __html: real_units }} /> <br/> 
                                Electronegativity: {this.props.element.electronegativity} <br/>
                                E<sup>-</sup> configuration: x <br/>
                                <div className="mobile_radioactive_indictaion">Radioactive: {this.props.element.radioactive}</div>
                                Discovered: {this.props.element.discovery_date} <br/> 
                                Etymology: {this.props.element.etymology} <br/> <br/>
                            </div>
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