import './App.css';
import PeriodicTable from './components/ptable';
import SearchBar from './components/search';
import ElectronegSlider from './components/electroneg-slider'
import MeltingPtSlider from './components/melting-pt-slider'
import BoilingPtSlider from './components/boiling-pt-slider'
import DiscoverySlider from './components/discovery-slider'
import SliderMenu from './components/sliders'
import atoms from './components/atoms.json'
import React, { Component } from 'react';

class App extends Component {

  state = {
    atoms: atoms.atoms,
    lowOpacity: "25%",
    dimOpacity: "40%",
    medOpacity: "75%",
    inputOption: "text",
    units: "celsius",
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
    const modal = document.getElementById("element-modal");
    modal.classList.remove("hide-me");

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
    
    const elmnt_nm = atom.name;
    const elmt_code = atom.symbol;
    const atmc_mss = atom.atomic_mass;
    const atmc_num = atom.atomic_number;
    let mp = atom.melting_point;
    let bp = atom.boiling_point;
    const elc_ngty = atom.electronegativity;
    const radioactivity = atom.radioactive;
    const discvry = atom.discovery_details;
    const etym = atom.etymology;
    const descr = atom.description;
    let fill_colour = "rgb(223, 0, 0)";
    const text_colour = "white";
    switch (atom.primary_class) {
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
    if (mp === 9999) {
        mp = "<em>je ne sais pas</em>"
      } else {
          if (this.state.units === "fahrenheit") mp = this.convertTemp(mp) + " &#176;F";
          else if (this.state.units === "kelvin") mp = this.convertTemp(mp) + " K";
          else mp = mp + " &#176;C";
      }
      if (bp === 9999) {
          bp = "<em>je ne sais pas</em>"
      } else {
          if (this.state.units === "fahrenheit") bp = this.convertTemp(bp, 2) + " &#176;F";
          else if (this.state.units === "kelvin") bp = this.convertTemp(bp, 2) + " K";
          else bp = bp + " &#176;C";
    }
    const svg_code = `
    <svg class= "item3" width="100%" height="300">
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
        <text x="75%" y="15%" dominant-baseline="middle" text-anchor="middle" class="number">${atmc_num}</text>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="chemical_symbol">${elmt_code}</text>
        <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" class="number">${atmc_mss}</text>
    </svg>`;
    const modal_code = 
    `<div class= "modal_content">
        <div class= "grid-container">
                <div class= "item1">${elmnt_nm}</div>
            <button class= "item2" onclick = "document.getElementById('element-modal').classList.toggle('hide-me')">&times</button>
            ${svg_code}
            <div class= "item4">
                Atomic Number: ${atmc_num} <br> 
                Relative Atomic Mass: ${atmc_mss} <br> 
                Melting Point: ${mp} <br>
                Boiling Point: ${bp} <br> 
                Electronegativity: ${elc_ngty} <br>
                E<sup>-</sup> configuration: x <br>
                <div class="mobile_radioactive_indictaion">Radioactive: ${radioactivity}</div>
                Discovered: ${discvry} <br> Etymology: ${etym} <br> <br>
            </div>
            <div class= "item7">
                ${descr}
            </div>
        </div>
    </div>`;
    modal.innerHTML = modal_code;

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
        this.handleMeltingPoint();
        break;
      case "bp-slider":
        document.getElementById("boiling_pt_div").style.display = "block";
        this.handleBoilingPoint();
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

  handleMeltingPoint = () => {
    const slider = document.getElementById('MP_slider');

    let mp_input = slider.value;
    let display = '';

    if (this.state.units === "fahrenheit") display = this.convertTemp(mp_input, 0) + " &#176;F";
    else if (this.state.units === "kelvin") display = this.convertTemp(Number(mp_input), 0) + " K";
    else display = mp_input + " &#176;C";
    
    document.getElementById("MP_display").innerHTML = display;

    let htmlAtoms = document.getElementsByClassName('element-tile');
    
    for (var i = htmlAtoms.length -1; i >= 0; i--) {
      let melting_pt =  parseFloat(htmlAtoms[i].getAttribute('data-meltingpt'));

      const inner_upper = melting_pt + 100;
      const inner_lower = melting_pt - 100;
      const mediu_upper = melting_pt + 500;
      const mediu_lower = melting_pt - 500;
      const outer_upper = melting_pt + 1000;
      const outer_lower = melting_pt - 1000;

      if ((slider.value > inner_lower) && (slider.value < inner_upper)) {
        htmlAtoms[i].style.opacity = "100%"; 
      } else if ((slider.value > mediu_lower) && (slider.value < mediu_upper)) { 
        htmlAtoms[i].style.opacity = this.state.medOpacity; 
      } else if ((slider.value > outer_lower) && (slider.value < outer_upper)) { 
        htmlAtoms[i].style.opacity = this.state.dimOpacity; 
      } else { 
        htmlAtoms[i].style.opacity = this.state.lowOpacity 
      } 
    }
  }

  handleBoilingPoint = () => {
    const slider = document.getElementById('BP_slider');

    let bp_input = slider.value;
    let display = '';

    if (this.state.units === "fahrenheit") display = this.convertTemp(bp_input, 0) + " &#176;F";
    else if (this.state.units === "kelvin") display = this.convertTemp(Number(bp_input), 0) + " K";
    else display = bp_input + " &#176;C";
    
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
        htmlAtoms[i].style.opacity = this.state.medOpacity; 
      } else if ((slider.value > outer_lower) && (slider.value < outer_upper)) { 
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
    console.log(option);
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

  handleCloseMenu = () => {
    const side_menu = document.getElementById('side-menu');
    side_menu.classList.add('hide-menu');
  }

  handleShowMenu = () => {
    const side_menu = document.getElementById('side-menu');
    side_menu.classList.remove('hide-menu');
  }

  handleToggleUnits = () => {
    console.log(this.state.units);
    switch(this.state.units) {
      case "celsius": 
        this.setState({ units : "fahrenheit" });
        break;
      case "fahrenheit": 
        this.setState({ units : "kelvin" });
        break;
      default:
        this.setState({ units : "celsius" });
    }
    
  }

  convertTemp(value, r) {
    switch (this.state.units) {
        case "fahrenheit":
            return ((5/9)*(value - 32)).toFixed(r);
        case "kelvin":
            return (value + 273.15).toFixed(0);
        default:
          return value;
    }
}

  render() {
    return (
      <React.Fragment>
        
        <header>
          <h1>Searchable periodic table</h1>
          <span 
            id='settings-btn' 
            onClick={this.handleShowMenu} 
            className='unselectable'
            >settings</span>
        </header>
        
        <div id="side-menu" className='hide-menu'>
          <button onClick={this.handleCloseMenu} id='close-side-menu'>close settings</button>
          <button onClick={this.handleToggleUnits}>{this.state.units}</button>
          <button>quiz</button>
          <button>help</button>
        </div>
        
        <div id='element_search_wrapper'>
          <SearchBar
            onHandleQuery={this.handleQuery}
            onHandleFilter={this.handleFilterToggle}
            onSelectFilter={this.handleFilter}
          />
          <ElectronegSlider onHandleElectronegativity={this.handleElectronegativity} />
          <MeltingPtSlider onHandleMeltingPoint={this.handleMeltingPoint} />        
          <BoilingPtSlider onHandleBoilingPoint={this.handleBoilingPoint} />
          <DiscoverySlider onHandleDiscovery={this.handleDiscovery} />
        </div>
        <SliderMenu 
          onSelectQuery={this.selectQueryType}
        />

        <PeriodicTable 
          atoms={atoms}
          onHandleElementClick={this.handleElementClick}
        />
        
        <div id="element-modal" className="hide-me"></div>

      </React.Fragment>
    );
  }
}

export default App;
