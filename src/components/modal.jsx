import React, { Component } from 'react'
import radioactiveImg from '../imgs/radioactive.png';
import maoriData from '../components/atoms-maori.json';
import getElectronConfig from './electron-config';
import getTileSVG from './element-tile-svg';

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
            const electron_config = getElectronConfig(this.props.element.atomic_number);
            const svg = getTileSVG(this.props.element);

            const raClasses = this.props.element.radioactive? "radioactive-symbol": "radioactive-symbol hide-me";
            const hasPage = this.props.element.link !== '/'? this.props.element.link: "hide-me";

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
                                <a href={this.props.element.link} className={hasPage}>See details</a>
                            </div>
                            <img className={raClasses} src={radioactiveImg} alt='radioactive symbol' />
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