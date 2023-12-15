import React, { Component } from 'react'

class BoilingPtSlider extends Component {

    handleBoilingPoint = () => {

        const slider = document.getElementById('BP_slider');
        const units = this.props.units;
        const lowOpacity = this.props.lowOpacity;
        const dimOpacity = this.props.dimOpacity;
        const medOpacity = this.props.medOpacity;
            
        let bp_input = slider.value;
        let display = '';

        display = this.props.onConvertTemp(bp_input, 0, units) + this.props.onGetUnitSymbol(units);

        document.getElementById("BP_display").innerHTML = display;
    
        let htmlAtoms = document.getElementsByClassName('element-tile');
        
        for (var i = htmlAtoms.length -1; i >= 0; i--) {
            let melting_pt =  parseFloat(htmlAtoms[i].getAttribute('data-boilingpt'));
        
            const inner_upper = melting_pt + 100;
            const inner_lower = melting_pt - 100;
            const mediu_upper = melting_pt + 500;
            const mediu_lower = melting_pt - 500;
            const outer_upper = melting_pt + 1000;
            const outer_lower = melting_pt - 1000;
        
            if ((slider.value > inner_lower) && (slider.value < inner_upper)) {
                htmlAtoms[i].style.opacity = "100%"; 
            } else if ((slider.value > mediu_lower) && (slider.value < mediu_upper)) { 
                htmlAtoms[i].style.opacity = medOpacity; 
            } else if ((slider.value > outer_lower) && (slider.value < outer_upper)) { 
                htmlAtoms[i].style.opacity = dimOpacity; 
            } else { 
                htmlAtoms[i].style.opacity = lowOpacity 
            } 
        }
      }

    render() {
        
        return ( 
            <div id="boiling_pt_div" className="slider_div not-selectable">
                <input 
                    type="range" 
                    min="-273" 
                    max="6600" 
                    className="slider" 
                    id="BP_slider" 
                    onChange={this.handleBoilingPoint} />
                <p id = "BP_display">drag slider <span class='desktop-only-text'>to change temperature</span></p>
            </div>
        );
    }
}

export default BoilingPtSlider;