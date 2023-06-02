import React, { Component } from 'react'
// import Element from './element'

class Modal extends Component {

    closeModal = () => {
        const modal = document.getElementById('element-modal');
        modal.classList.toggle('hide-me');
    }

    getUnits = () => {
        const units = this.props.units;
        let thingys = document.getElementsByClassName("tempUnits");
        let real_units = this.props.onGetUnitSymbol(units);
        console.log(thingys);
    }

    render() {
        if (this.props.element) {
            
            const units = this.props.units;
            const melting_pt = this.props.onConvertTemp(this.props.element.melting_point, 0, units);
            const boiling_pt = this.props.onConvertTemp(this.props.element.boiling_point, 0, units);
            const real_units = this.props.onGetUnitSymbol(units);

            this.getUnits();

            return ( 
                <div id="element-modal" className="hide-me">
                    <div className= "modal_content">
                        <div className= "grid-container">
                            <div className= "item1">{this.props.element.name}</div>
                            <button className= "item2" onClick={this.closeModal}>&times;</button>
                            {/* ${svg_code} */}
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