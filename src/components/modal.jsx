import React, { Component } from 'react'
import radioactiveImg from '../imgs/radioactive.png';
import maoriData from '../components/atoms-maori.json';

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

    handleWeirdConfigurations = (atomicNumber) => {

        switch(atomicNumber) {
            case 24:
                return ["[Ar]", "3d<sup>5</sup>", "4s<sup>1</sup>"];
            case 29:
                return ["[Ar]", "3d<sup>10</sup>", "4s<sup>1</sup>"];
            case 41:
                return ["[Kr]", "4d<sup>4</sup>", "5s<sup>1</sup>"];
            case 42:
                return ["[Kr]", "4d<sup>5</sup>", "5s<sup>1</sup>"];
            case 44:
                return ["[Kr]", "4d<sup>7</sup>", "5s<sup>1</sup>"];
            case 45:
                return ["[Kr]", "4d<sup>8</sup>", "5s<sup>1</sup>"];
            case 46:
                return ["[Kr]", "4d<sup>10</sup>"];
            case 47:
                return ["[Kr]", "4d<sup>10</sup>", "5s<sup>1</sup>"];
            case 57:
                return ["[Xe]", "5d<sup>1</sup>", "6s<sup>2</sup>"];
            case 58:
                return ["[Xe]", "4f<sup>1</sup>", "5d<sup>1</sup>", "6s<sup>2</sup>"];
            case 64:
                return ["[Xe]", "4f<sup>7</sup>", "5d<sup>1</sup>", "6s<sup>2</sup>"];
            case 78:
                return ["[Xe]", "4f<sup>14</sup>", "5d<sup>9</sup>", "6s<sup>1</sup>"];
            case 79:
                return ["[Xe]", "4f<sup>14</sup>", "5d<sup>10</sup>", "6s<sup>1</sup>"];
            case 89:
                return ["[Xe]", "4f<sup>14</sup>", "5d<sup>10</sup>", "6s<sup>2</sup>"];
            case 90:
                return ["[Rn]", "6d<sup>2</sup>", "7s<sup>2</sup>"];
            case 91:
                return ["[Rn]", "5f<sup>2</sup>", "6d<sup>1</sup>", "7s<sup>2</sup>"];
            case 92:
                return ["[Rn]", "5f<sup>3</sup>", "6d<sup>1</sup>", "7s<sup>2</sup>"];
            case 93:
                return ["[Rn]", "5f<sup>4</sup>", "6d<sup>1</sup>", "7s<sup>2</sup>"];
            case 96:
                return ["[Rn]", "5f<sup>7</sup>", "6d<sup>1</sup>", "7s<sup>2</sup>"];
            case 103:
                return ["[Rn]", "5f<sup>14</sup>", "7s<sup>2</sup>", "7p<sup>1</sup>"];
            default:
                return []
        }
    }

    getRawElectronConfig = (atomicNumber) => {
        let electronConfig = [];
        let remainingElectrons = atomicNumber;

        const s = 2;
        const p = 6;
        const d = 10;
        const f = 14;
        const g = 99;
        const i = 99;
        const h = 99;

        const subshells = [
            {subshell: "1s", type: s, },
            {subshell: "2s", type: s, },
            {subshell: "2p", type: p, },
            {subshell: "3s", type: s, },
            {subshell: "3p", type: p, },
            {subshell: "4s", type: s, },
            {subshell: "3d", type: d, },
            {subshell: "4p", type: p, },
            {subshell: "5s", type: s, },
            {subshell: "4d", type: d, },
            {subshell: "5p", type: p, },
            {subshell: "6s", type: s, },
            {subshell: "4f", type: f, },
            {subshell: "5d", type: d, },
            {subshell: "6p", type: p, },
            {subshell: "7s", type: s, },
            {subshell: "5f", type: f, },
            {subshell: "6d", type: d, },
            {subshell: "7p", type: p, },
            {subshell: "5g", type: g, },
            {subshell: "6f", type: f, },
            {subshell: "7d", type: d, },
            {subshell: "6g", type: g, },
            {subshell: "7f", type: f, },
            {subshell: "6h", type: h, },
            {subshell: "7g", type: g, },
            {subshell: "7h", type: h, },
            {subshell: "7i", type: i, },
        ];

        let index = 0;
        for (index; index < subshells.length && remainingElectrons > 0; index++) {
            const subshell = subshells[index];
            let result = subshell.subshell;
            if (remainingElectrons > subshell.type) { result = result + `<sup>${subshell.type}</sup>` }
            else { result = result + `<sup>${remainingElectrons}</sup>` }
            electronConfig.push(result);
            remainingElectrons = remainingElectrons - subshell.type;
        }
        return electronConfig;
      }
      
    removeCommonElements = (firstArray, secondArray) => {
        // remove elements from the 1st array that appear in the 2nd array
        return firstArray.filter(subshell => !secondArray.includes(subshell));
    }


    getElectronConfig = (atomicNumber) => {
        let electronConfig = this.getRawElectronConfig(atomicNumber);

        if (atomicNumber > 2 ) { 
            let nobleGasSymbol = "[He]";
            let abbrevConfig = [];
            let nobleGasConfig = [];
            
            if (atomicNumber > 86) { 
                nobleGasConfig = this.getRawElectronConfig(86);
                nobleGasSymbol = "[Rn]";
            } else if (atomicNumber > 54) { 
                nobleGasConfig = this.getRawElectronConfig(54);
                nobleGasSymbol = "[Rn]";
            } else if (atomicNumber > 36) { 
                nobleGasConfig = this.getRawElectronConfig(36);
                nobleGasSymbol = "[Kr]";
            } else if (atomicNumber > 18) { 
                nobleGasConfig = this.getRawElectronConfig(18);
                nobleGasSymbol = "[Ar]";
            } else if (atomicNumber > 10) { 
                nobleGasConfig = this.getRawElectronConfig(10);
                nobleGasSymbol = "[Ne]";
            } else { 
                nobleGasConfig = this.getRawElectronConfig(2);
                nobleGasSymbol = "[He]";
            }
            abbrevConfig = this.removeCommonElements(electronConfig, nobleGasConfig);
            abbrevConfig.splice(0, 0, nobleGasSymbol);
            electronConfig = abbrevConfig;
        }

        const weirdElectronConfigurations = [
            24, 29, 41, 42, 44, 45, 46, 47, 57, 58, 64, 78, 79, 89, 90, 91, 92, 93, 96, 103
        ];

        if (weirdElectronConfigurations.includes(atomicNumber)) {
            electronConfig = this.handleWeirdConfigurations(atomicNumber);
        }

        return `${electronConfig.join(" ")}`;
      }      

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
            const electron_config = this.getElectronConfig(this.props.element.atomic_number);
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
            const elementName = this.props.language === "English"? this.props.element.name : maoriAtom.name;
            const discDetails = this.props.language === "English"? this.props.element.discovery_details : this.props.element.discovery_date;
            const etymology = this.props.language === "English"? this.props.element.etymology : maoriAtom.etymology;

            const labelAtomicNo = (this.props.language !== "English") ? `Tau iraoho` : `Atomic Number`;
            const labelAtomicMass = (this.props.language !== "English") ? `Tau karihi (o te ngota)` : `Relative Atomic Mass`;
            const labelMP = (this.props.language !== "English") ? `Pae rewa` : `Melting Point`;
            const labelBP = (this.props.language !== "English") ? `Hūnga` : `Boiling Point`;
            const labelElectronConfig = (this.props.language !== "English") ? `Irahiko whakatakoto` : `E<sup>-</sup> configuration`;
            const labelDiscovery = (this.props.language !== "English") ? `Kitea` : `Discovery details`;
            const labelEN = (this.props.language !== "English") ? `Irahikotōraro` : `Electronegativity`;

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