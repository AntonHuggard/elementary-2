import PeriodicTable from '../components/ptable';
import SearchBar from '../components/search';
import ElectronegSlider from '../components/electroneg-slider';
import MeltingPtSlider from '../components/melting-pt-slider';
import BoilingPtSlider from '../components/boiling-pt-slider';
import DiscoverySlider from '../components/discovery-slider';
import SliderMenu from '../components/sliders';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import atoms from '../components/atoms.json';
import Modal from '../components/modal';
import React, { Component } from 'react';


const scaleNames = {
  'c': 'celsius',
  'f': 'fahrenheit',
  'k': 'kelvin'
};


class Home extends Component {

    state = {
        atoms: atoms.atoms,
        lowOpacity: "25%",
        dimOpacity: "40%",
        medOpacity: "75%",
        inputOption: "text",
        units: scaleNames['c'],
        selectedElement: null
    };
    
    showElements = (show) => {
        let htmlAtoms = document.getElementsByClassName('element-tile');
        for (var i = htmlAtoms.length -1; i >= 0; i--) {
          htmlAtoms[i].style.opacity = show? "100%" : this.state.lowOpacity;
        }
    }
    
    getMatchingElements (term, str, attr) {
        let results = [];
        switch (attr) {
          case "name":
            term = term.replace(/\s/g, "");
            this.state.atoms.forEach(elmt => { if(elmt[attr].includes(term)) results.push(elmt.symbol) });
            break;
          case "symbol":
            this.state.atoms.forEach(elmt => { 
              term = term.toUpperCase();
              if((elmt[attr].toUpperCase().includes(term)) || (elmt[attr] === term)) results.push(elmt.symbol) 
            });
            break;
          default:
            this.state.atoms.forEach(element => {
              const data = str? element[attr].toLowerCase() : element[attr]
              if(data === term) results.push(element.symbol);
            });
        }
        return results;
    }
    
    handleElementClick = (atom) => {
        this.setState({ selectedElement : atom });

        const modal = document.getElementById("element-modal");
        modal.classList.remove("hide-me");
    }
    
    handleFilter = (filter) => {
          this.showElements(false);
          let results = [];
    
          if (filter.match(/[spdf]-block\s?$/i)) { 
            const block = filter[0];
            results = this.getMatchingElements(block, true, "block");
          } else if(filter==='radioactive') {
            results = this.getMatchingElements(true, false, "radioactive");
          } else if(filter==='gas') {
            results = this.getMatchingElements("gas", true, "state_at_standard_conditions");
          } else if(filter==='liquid') {
            results = this.getMatchingElements("liquid", true, "state_at_standard_conditions");
          } else if(filter==='solid') {
            results = this.getMatchingElements("solid", true, "state_at_standard_conditions");
          } else if(filter==='nonmetal') {
            results = this.getMatchingElements("nonmetal", true, "metalness");
          } else if(filter==='metal') {
            results = this.getMatchingElements("metal", true, "metalness");
          } else if(filter==='metalloid') {
            results = this.getMatchingElements("metalloid", true, "metalness");
          } else if(filter==='synthetic') {
            this.state.atoms.forEach(elmt => { 
              if(elmt.atomic_number >= 95) results.push(elmt.symbol) 
            });
          } else {
            this.state.atoms.forEach(elmt => { results.push(elmt.symbol) });
          }
    
          results.forEach(symbol => {
            let htmlAtom = document.getElementById(symbol);
            htmlAtom.style.opacity = "100%";
          });
    
    }
    
    handleQuery = (query) => {
          query === "" ? this.showElements(true): this.showElements(false);
    
          if (query === "") {
            console.log("show default mobile view");
          } else {
            console.log("show special view");
          }
    
    
          let results = [];
          query = query.toLowerCase();
    
          // search by...
          if ((query.length<3) && (query.match(/[a-z]{1,2}\s?$/i))) { 
            results = this.getMatchingElements(query, true, "symbol");
          } else if(query.match(/^\d{1,3}\s?$/i)) {
            results = this.getMatchingElements(parseInt(query, 10), false, "atomic_number");
          } else if (query.match(/non[-\s]?metals?\s?$/i)) {
            results = this.getMatchingElements("non-metal", true, "primary_class");
          } else if (query.match(/noble[-\s]?gas(es)?\s?$/i)) {
            results = this.getMatchingElements("noble_gas", true, "primary_class");
          } else if (query.match(/alkali[-\s]?metals?\s?$/i)) {
            results = this.getMatchingElements("alkali-metal", true, "primary_class");
          } else if (query.match(/alkaline[-\s]?earth[-\s]?metals?\s?$/i)) {
            results = this.getMatchingElements("alkaline-earth-metal", true, "primary_class");
          } else if (query.match(/metaux[-\s]?pauvres?\s?$/i)) {
            results = this.getMatchingElements("metaux_pauvres", true, "primary_class");
          } else if (query.match(/metalloids?\s?$/i)) {
            results = this.getMatchingElements("metalloid", true, "primary_class");
          } else if (query.match(/transition[-\s]?metals?\s?$/i)) {
            results = this.getMatchingElements("transition-metal", true, "primary_class");
          } else if (query.match(/^lanthanoids?\s?$/i) || query.match(/^lanthanides?\s?$/i)) {
            results = this.getMatchingElements("lanthanoid", true, "primary_class");
          } else if (query.match(/^actinoids?\s?$/i) || query.match(/^actinides?\s?$/i)) {
            results = this.getMatchingElements("actinoid", true, "primary_class");
          } else if (query.match(/unknowns?\s?$/i)) {
            results = this.getMatchingElements("unknown", true, "primary_class");
          } else if (query.match(/radio\s?active$/i)) {
            results = this.getMatchingElements(true, false, "radioactive");
          } else if (query.match(/^halogens?$/i)) {
            results = this.getMatchingElements(17, false, "group");
          } else if (query.match(/^transactinides?$/i)) {
            // there's no property that groups these guys together -- have to get them by atomic #
            results = this.getMatchingElements(104, false, "atomic_number");
            results.push(this.getMatchingElements(105, false, "atomic_number"));
            results.push(this.getMatchingElements(106, false, "atomic_number"));
            results.push(this.getMatchingElements(107, false, "atomic_number"));
            results.push(this.getMatchingElements(108, false, "atomic_number"));
            results.push(this.getMatchingElements(109, false, "atomic_number"));
            results.push(this.getMatchingElements(110, false, "atomic_number"));
            results.push(this.getMatchingElements(111, false, "atomic_number"));
          } else if (query.match(/^row[-\s]?[1-7]$/i) || query.match(/^period[-\s]?[1-7]$/i)) {
            query = query.replace('row', '' );
            query = query.replace('period', '' );
            query = query.replace('-', '' );
            query = parseInt(query, 10);
            results = this.getMatchingElements(query, false, "period");
          } else if (query.match(/^group[-\s]?\d+$/i)) {
            query = query.replace('group', '' );
            query = query.replace('-', '' );
            query = parseInt(query, 10);
            results = this.getMatchingElements(query, false, "group");
          } else results = this.getMatchingElements(query, false, "name");
          results.forEach(symbol => {
            let htmlAtom = document.getElementById(symbol);
            htmlAtom.style.opacity = "100%";
          });
    
    }
    
    hideInputsExcept(exception) {
        document.getElementById("element_search_container").style.display = "none";
        document.getElementById("electronegativity_div").style.display = "none";
        document.getElementById("melting_pt_div").style.display = "none";
        document.getElementById("boiling_pt_div").style.display = "none";
        document.getElementById("discovery_div").style.display = "none";
        switch (exception) {
          case "en-slider":
            document.getElementById("electronegativity_div").style.display = "block";
            this.handleElectronegativity();
            break;
          case "mp-slider":
            document.getElementById("melting_pt_div").style.display = "block";
            // this.handleMeltingPoint();
            break;
          case "bp-slider":
            document.getElementById("boiling_pt_div").style.display = "block";
            // this.handleBoilingPoint();
            break;
          case "discovery":
            document.getElementById("discovery_div").style.display = "block";
            this.handleDiscovery();
            break;
          default:
            document.getElementById("element_search_container").style.display = "grid";
        }
    }
    
    handleElectronegativity = () => {
        const slider = document.getElementById('EN_slider');
        const slider_value = slider.value / 100;
        
        document.getElementById('EN_display').innerText = slider_value;
        let htmlAtoms = document.getElementsByClassName('element-tile');
        
        for (var i = htmlAtoms.length -1; i >= 0; i--) {
          let en_value =  parseFloat(htmlAtoms[i].getAttribute('data-electroneg'));
    
          const inner_upper = en_value + 0.25;
          const inner_lower = en_value - 0.25;
          const mediu_upper = en_value + 0.5;
          const mediu_lower = en_value - 0.5;
          const outer_upper = en_value + 1;
          const outer_lower = en_value - 1;
    
          if ((slider_value > inner_lower) && (slider_value < inner_upper)) {
            htmlAtoms[i].style.opacity = "100%"; 
          } else if ((slider_value > mediu_lower) && (slider_value < mediu_upper)) { 
            htmlAtoms[i].style.opacity = this.state.medOpacity; 
          } else if ((slider_value > outer_lower) && (slider_value < outer_upper)) { 
            htmlAtoms[i].style.opacity = this.state.dimOpacity; 
          } else { 
            htmlAtoms[i].style.opacity = this.state.lowOpacity 
          } 
        }
    }
    
      
    
    handleDiscovery = () => {
        const slider = document.getElementById('discovery_timeline');
        document.getElementById("date_display").innerHTML = slider.value;
    
        let htmlAtoms = document.getElementsByClassName('element-tile');
    
        for (var i = htmlAtoms.length -1; i >= 0; i--) {
          let discovery_date =  htmlAtoms[i].getAttribute('data-discovery');
          if (slider.value >= discovery_date) htmlAtoms[i].style.opacity = "100%"; 
          else htmlAtoms[i].style.opacity = this.state.lowOpacity;
        }
    }
    
    selectQueryType = (option) => {
        const activate_slider = this.state.inputOption === option ? false : true;
        const setInput = activate_slider ? option : "text";
        activate_slider ? this.showElements(false) : this.showElements(true);
        this.setState({ inputOption : setInput });
        if (activate_slider) this.hideInputsExcept(option); 
        else this.hideInputsExcept("search");
    }
    
    handleFilterToggle = () => {
        const filter_btn = document.getElementById('filter-menu');
        const magnifying_glass = document.getElementById('query-img');
        const filter_menu = document.getElementById('filter-accordian');
        filter_btn.classList.toggle('expanded');
        magnifying_glass.classList.toggle('expanded');
        filter_menu.classList.toggle('hide-me');
    }


    toggleUnits = () => {
        switch(this.state.units) {
          case "celsius": 
            this.setState({ units : scaleNames['f'] });
            break;
          case "fahrenheit": 
            this.setState({ units : scaleNames['k'] });
            break;
          default:
            this.setState({ units : scaleNames['c'] });
        }
    }
    
    convertTemp(value, r, outputUnits="celsius") { 
        // value is in deg C, r is number of dp to round to, outputUnits is convert to

        if (outputUnits === "fahrenheit") return ((5/9)*(value - 32)).toFixed(r);
        else if (outputUnits === "kelvin") return (Number(value) + 273.15).toFixed(r);
        return value;
    }

    getUnitSymbol(units) {
        if (units === "fahrenheit") return " &#176;F";
        else if (units === "kelvin") return " K";
        return " &#176;C";
    }


    render() {

      const units = this.state.units;
      const lowOpacity = this.state.lowOpacity;
      const dimOpacity = this.state.dimOpacity;
      const medOpacity = this.state.medOpacity;
      const selectedElement = this.state.selectedElement;

      return (
            <>
                <Header />
                <SideMenu 
                    onToggleUnits={this.toggleUnits} 
                    units={units} />
                    
                <div id='element_search_wrapper'>
                    <SearchBar
                        onHandleQuery={this.handleQuery}
                        onHandleFilter={this.handleFilterToggle}
                        onSelectFilter={this.handleFilter}
                    />
                    <ElectronegSlider onHandleElectronegativity={this.handleElectronegativity} />

                    <MeltingPtSlider 
                      units={units}
                      lowOpacity={lowOpacity} dimOpacity={dimOpacity} medOpacity={medOpacity}
                      onGetUnitSymbol={this.getUnitSymbol}
                      onConvertTemp={this.convertTemp} />        
                    
                    <BoilingPtSlider 
                      units={units}
                      lowOpacity={lowOpacity} dimOpacity={dimOpacity} medOpacity={medOpacity}
                      onGetUnitSymbol={this.getUnitSymbol}
                      onConvertTemp={this.convertTemp} />

                    <DiscoverySlider onHandleDiscovery={this.handleDiscovery} />
                </div>

                <SliderMenu onSelectQuery={this.selectQueryType} />

                <PeriodicTable 
                    atoms={atoms}
                    onHandleElementClick={this.handleElementClick}
                    />
                    
                <Modal 
                    element={selectedElement} 
                    units={units}
                    onConvertTemp={this.convertTemp}
                    onGetUnitSymbol={this.getUnitSymbol} />

            </>
        )
    }
}

export default Home;