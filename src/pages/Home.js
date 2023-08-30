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
import runQuery from '../components/query';
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
        selectedElement: null,
        periodicTableClass: "periodic-table default-view",
        language: 'en',
    };
    
    showElements = (show) => {
        let htmlAtoms = document.getElementsByClassName('element-tile');
        for (var i = htmlAtoms.length -1; i >= 0; i--) {
          htmlAtoms[i].style.opacity = show? "100%" : this.state.lowOpacity;
        }
    }
    
    filterElements (term, attr) {
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
              const dataType = typeof element[attr]
              const data = (dataType === "string")? element[attr].toLowerCase() : element[attr];
              if (data === term) results.push(element.symbol);
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
            results = this.filterElements(block, "block");
          } else if(filter==='radioactive') {
            results = this.filterElements(true, "radioactive");
          } else if(filter==='gas') {
            results = this.filterElements("gas", "state_at_standard_conditions");
          } else if(filter==='liquid') {
            results = this.filterElements("liquid", "state_at_standard_conditions");
          } else if(filter==='solid') {
            results = this.filterElements("solid", "state_at_standard_conditions");
          } else if(filter==='nonmetal') {
            results = this.filterElements("nonmetal", "metalness");
          } else if(filter==='metal') {
            results = this.filterElements("metal", "metalness");
          } else if(filter==='metalloid') {
            results = this.filterElements("metalloid", "metalness");
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
          const clearSearch = document.getElementById("clear-search-btn").classList;
          query === "" ? clearSearch.add("hide-me"): clearSearch.remove("hide-me");

          let all_atoms = [];
          this.state.atoms.forEach(atom => { all_atoms.push(atom.symbol); });

          let results = runQuery(query);

          const not_results = all_atoms.filter(atom => !results.includes(atom));

          if (query !== "") {
            results.forEach(symbol => {
              let htmlAtom = document.getElementById(symbol);
              htmlAtom.style.opacity = "100%";
              htmlAtom.style.display = "grid";
              this.setState({ periodicTableClass : "periodic-table search-view" });
            });
            not_results.forEach(symbol => {
              let htmlAtom = document.getElementById(symbol);
              htmlAtom.style.display = "";
            })
          } else {
            this.setState({ periodicTableClass : "periodic-table default-view" });
          }
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
            // default case is the searchbar
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

    toggleLanguage = () => {
      if (this.state.language === "en") {
        this.setState({language: 'mi'})
      } else {
        this.setState({language: 'en'})
      }
    }


    render() {

      const units = this.state.units;
      const lowOpacity = this.state.lowOpacity;
      const dimOpacity = this.state.dimOpacity;
      const medOpacity = this.state.medOpacity;
      const selectedElement = this.state.selectedElement;

      return (
            <>
                <Header language={this.state.language} />
                <SideMenu 
                    onToggleUnits={this.toggleUnits} 
                    units={units}
                    onToggleLanguage={this.toggleLanguage} 
                    language={this.state.language} />
                    
                <div id='element_search_wrapper'>
                    <SearchBar
                        onHandleQuery={this.handleQuery}
                        onHandleFilter={this.handleFilterToggle}
                        onSelectFilter={this.handleFilter}
                        language={this.state.language} />

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

                <SliderMenu 
                  onSelectQuery={this.selectQueryType} 
                  inputOption={this.state.inputOption}
                  language={this.state.language} />

                <PeriodicTable 
                    atoms={atoms}
                    onHandleElementClick={this.handleElementClick}
                    tableClasses={this.state.periodicTableClass}
                    />
                    
                <Modal 
                    element={selectedElement} 
                    units={units}
                    onConvertTemp={this.convertTemp}
                    onGetUnitSymbol={this.getUnitSymbol}
                    language={this.state.language} />

            </>
        )
    }
}

export default Home;