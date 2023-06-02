import React, { Component } from 'react'
// import Element from './element'

class Modal extends Component {

    closeModal = () => {
        const modal = document.getElementById('element-modal');
        modal.classList.toggle('hide-me');
    }

    render() {
        if (this.props.element) {
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
                                Melting Point: {this.props.element.melting_point} <br/>
                                Boiling Point: {this.props.element.boiling_point} <br/> 
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