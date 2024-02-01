import './style/App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Hydrogen from './pages/elements/Hydrogen';
import Helium from './pages/elements/Helium';
import Lithium from './pages/elements/Lithium';
import Beryllium from './pages/elements/Beryllium';
import Boron from './pages/elements/Boron';
import Carbon from './pages/elements/Carbon';
import Nitrogen from './pages/elements/Nitrogen';
import Oxygen from './pages/elements/Oxygen';
import Fluorine from './pages/elements/Fluorine';
import Neon from './pages/elements/Neon';
import Sodium from './pages/elements/Sodium';
import Magnesium from './pages/elements/Magnesium';
import Aluminium from './pages/elements/Aluminium';
import Silicon from './pages/elements/Silicon';
import Phosphorus from './pages/elements/Phosphorus';
import Sulphur from './pages/elements/Sulphur';
import Chlorine from './pages/elements/Chlorine';
import Argon from './pages/elements/Argon';
import Potassium from './pages/elements/Potassium';
import Calcium from './pages/elements/Calcium';
import Scandium from './pages/elements/Scandium';
import Titanium from './pages/elements/Titanium';
import Vanadium from './pages/elements/Vanadium';
import Chromium from './pages/elements/Chromium';
import Manganese from './pages/elements/Manganese';
import Iron from './pages/elements/Iron';
import Cobalt from './pages/elements/Cobalt';
import Nickel from './pages/elements/Nickel';
import Copper from './pages/elements/Copper';
import Zinc from './pages/elements/Zinc';
import Gallium from './pages/elements/Gallium';
import Germanium from './pages/elements/Germanium';
import Arsenic from './pages/elements/Arsenic';
import Selenium from './pages/elements/Selenium';
import Bromine from './pages/elements/Bromine';
import Krypton from './pages/elements/Krypton';
import Rubidium from './pages/elements/Rubidium';
import Strontium from './pages/elements/Strontium';
import Yttrium from './pages/elements/Yttrium';
import Zirconium from './pages/elements/Zirconium';
import Niobium from './pages/elements/Niobium';
import Molybdenum from './pages/elements/Molybdenum';
import Technetium from './pages/elements/Technetium';
import Ruthenium from './pages/elements/Ruthenium';
import Rhodium from './pages/elements/Rhodium';
import Palladium from './pages/elements/Palladium';
import Silver from './pages/elements/Silver';
import Cadmium from './pages/elements/Cadmium';
import Indium from './pages/elements/Indium';
import Tin from './pages/elements/Tin';
import Antimony from './pages/elements/Antimony';
import Tellurium from './pages/elements/Tellurium';
import Iodine from './pages/elements/Iodine';
import Xenon from './pages/elements/Xenon';
import Caesium from './pages/elements/Caesium';
import Barium from './pages/elements/Barium';
import Lanthanum from './pages/elements/Lanthanum';
import Cerium from './pages/elements/Cerium';
import Praseodymium from './pages/elements/Praseodymium';
import Neodymium from './pages/elements/Neodymium';
import Promethium from './pages/elements/Promethium';
import Samarium from './pages/elements/Samarium';
import Europium from './pages/elements/Europium';
import Gadolinium from './pages/elements/Gadolinium';
import Terbium from './pages/elements/Terbium';
import Dysprosium from './pages/elements/Dysprosium';
import Holmium from './pages/elements/Holmium';
import Erbium from './pages/elements/Erbium';
import Thulium from './pages/elements/Thulium';
import Ytterbium from './pages/elements/Ytterbium';
import Lutetium from './pages/elements/Lutetium';
import Hafnium from './pages/elements/Hafnium';
import Tantalum from './pages/elements/Tantalum';
import Tungsten from './pages/elements/Tungsten';
import Rhenium from './pages/elements/Rhenium';
import Osmium from './pages/elements/Osmium';
import Iridium from './pages/elements/Iridium';
import Platinum from './pages/elements/Platinum';
import Gold from './pages/elements/Gold';
import Mercury from './pages/elements/Mercury';
import Thallium from './pages/elements/Thallium';
import Lead from './pages/elements/Lead';
import Bismuth from './pages/elements/Bismuth';
import Polonium from './pages/elements/Polonium';
import Astatine from './pages/elements/Astatine';
import Radon from './pages/elements/Radon';
import Francium from './pages/elements/Francium';
import Radium from './pages/elements/Radium';
import Actinium from './pages/elements/Actinium';
import Thorium from './pages/elements/Thorium';
import Protactinium from './pages/elements/Protactinium';
import Uranium from './pages/elements/Uranium';
import Neptunium from './pages/elements/Neptunium';
import Plutonium from './pages/elements/Plutonium';
import Americium from './pages/elements/Americium';
import Curium from './pages/elements/Curium';
import Berkelium from './pages/elements/Berkelium';
import Californium from './pages/elements/Californium';
import Einsteinium from './pages/elements/Einsteinium';
import Fermium from './pages/elements/Fermium';
import Mendelevium from './pages/elements/Mendelevium';
import Nobelium from './pages/elements/Nobelium';
import Lawrencium from './pages/elements/Lawrencium';
import Rutherfordium from './pages/elements/Rutherfordium';
import Dubnium from './pages/elements/Dubnium';
import Seaborgium from './pages/elements/Seaborgium';
import Bohrium from './pages/elements/Bohrium';
import Hassium from './pages/elements/Hassium';
import Meitnerium from './pages/elements/Meitnerium';
import Darmstadtium from './pages/elements/Darmstadtium';
import Roentgenium from './pages/elements/Roentgenium';
import Copernicium from './pages/elements/Copernicium';
import Nihonium from './pages/elements/Nihonium';
import Flerovium from './pages/elements/Flerovium';
import Moscovium from './pages/elements/Moscovium';
import Livermorium from './pages/elements/Livermorium';
import Tennessine from './pages/elements/Tennessine';
import Oganesson from './pages/elements/Oganesson';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Ions from './pages/Ions'
import NotFound from './pages/NotFound';
import React, { Component } from 'react';

class App extends Component {



  render() {
    return (
      <React.Fragment>

        <HashRouter>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="/hydrogen" element={<Hydrogen />} />
                <Route path="/helium" element={<Helium />} />
                <Route path="/lithium" element={<Lithium />} />
                <Route path="/beryllium" element={<Beryllium />} />
                <Route path="/boron" element={<Boron />} />
                <Route path="/carbon" element={<Carbon />} />
                <Route path="/nitrogen" element={<Nitrogen />} />
                <Route path="/oxygen" element={<Oxygen />} />
                <Route path="/fluorine" element={<Fluorine />} />
                <Route path="/neon" element={<Neon />} />
                <Route path="/sodium" element={<Sodium />} />
                <Route path="/magnesium" element={<Magnesium />} />
                <Route path="/aluminium" element={<Aluminium />} />
                <Route path="/silicon" element={<Silicon />} />
                <Route path="/phosphorus" element={<Phosphorus />} />
                <Route path="/sulphur" element={<Sulphur />} />
                <Route path="/chlorine" element={<Chlorine />} />
                <Route path="/argon" element={<Argon />} />
                <Route path="/potassium" element={<Potassium />} />
                <Route path="/calcium" element={<Calcium />} />
                <Route path="/scandium" element={<Scandium />} />
                <Route path="/titanium" element={<Titanium />} />
                <Route path="/vanadium" element={<Vanadium />} />
                <Route path="/chromium" element={<Chromium />} />
                <Route path="/manganese" element={<Manganese />} />
                <Route path="/iron" element={<Iron />} />
                <Route path="/cobalt" element={<Cobalt />} />
                <Route path="/nickel" element={<Nickel />} />
                <Route path="/copper" element={<Copper />} />
                <Route path="/zinc" element={<Zinc />} />
                <Route path="/gallium" element={<Gallium />} />
                <Route path="/germanium" element={<Germanium />} />
                <Route path="/arsenic" element={<Arsenic />} />
                <Route path="/selenium" element={<Selenium />} />
                <Route path="/bromine" element={<Bromine />} />
                <Route path="/krypton" element={<Krypton />} />
                <Route path="/rubidium" element={<Rubidium />} />
                <Route path="/strontium" element={<Strontium />} />
                <Route path="/yttrium" element={<Yttrium />} />
                <Route path="/zirconium" element={<Zirconium />} />
                <Route path="/niobium" element={<Niobium />} />
                <Route path="/molybdenum" element={<Molybdenum />} />
                <Route path="/technetium" element={<Technetium />} />
                <Route path="/ruthenium" element={<Ruthenium />} />
                <Route path="/rhodium" element={<Rhodium />} />
                <Route path="/palladium" element={<Palladium />} />
                <Route path="/silver" element={<Silver />} />
                <Route path="/cadmium" element={<Cadmium />} />
                <Route path="/indium" element={<Indium />} />
                <Route path="/tin" element={<Tin />} />
                <Route path="/antimony" element={<Antimony />} />
                <Route path="/tellurium" element={<Tellurium />} />
                <Route path="/iodine" element={<Iodine />} />
                <Route path="/xenon" element={<Xenon />} />
                <Route path="/caesium" element={<Caesium />} />
                <Route path="/barium" element={<Barium />} />
                <Route path="/lanthanum" element={<Lanthanum />} />
                <Route path="/cerium" element={<Cerium />} />
                <Route path="/praseodymium" element={<Praseodymium />} />
                <Route path="/neodymium" element={<Neodymium />} />
                <Route path="/promethium" element={<Promethium />} />
                <Route path="/samarium" element={<Samarium />} />
                <Route path="/europium" element={<Europium />} />
                <Route path="/gadolinium" element={<Gadolinium />} />
                <Route path="/terbium" element={<Terbium />} />
                <Route path="/dysprosium" element={<Dysprosium />} />
                <Route path="/holmium" element={<Holmium />} />
                <Route path="/erbium" element={<Erbium />} />
                <Route path="/thulium" element={<Thulium />} />
                <Route path="/ytterbium" element={<Ytterbium />} />
                <Route path="/lutetium" element={<Lutetium />} />
                <Route path="/hafnium" element={<Hafnium />} />
                <Route path="/tantalum" element={<Tantalum />} />
                <Route path="/tungsten" element={<Tungsten />} />
                <Route path="/rhenium" element={<Rhenium />} />
                <Route path="/osmium" element={<Osmium />} />
                <Route path="/iridium" element={<Iridium />} />
                <Route path="/platinum" element={<Platinum />} />
                <Route path="/gold" element={<Gold />} />
                <Route path="/mercury" element={<Mercury />} />
                <Route path="/thallium" element={<Thallium />} />
                <Route path="/lead" element={<Lead />} />
                <Route path="/bismuth" element={<Bismuth />} />
                <Route path="/polonium" element={<Polonium />} />
                <Route path="/astatine" element={<Astatine />} />
                <Route path="/radon" element={<Radon />} />
                <Route path="/francium" element={<Francium />} />
                <Route path="/radium" element={<Radium />} />
                <Route path="/actinium" element={<Actinium />} />
                <Route path="/thorium" element={<Thorium />} />
                <Route path="/protactinium" element={<Protactinium />} />
                <Route path="/uranium" element={<Uranium />} />
                <Route path="/neptunium" element={<Neptunium />} />
                <Route path="/plutonium" element={<Plutonium />} />
                <Route path="/americium" element={<Americium />} />
                <Route path="/curium" element={<Curium />} />
                <Route path="/berkelium" element={<Berkelium />} />
                <Route path="/californium" element={<Californium />} />
                <Route path="/einsteinium" element={<Einsteinium />} />
                <Route path="/fermium" element={<Fermium />} />
                <Route path="/mendelevium" element={<Mendelevium />} />
                <Route path="/nobelium" element={<Nobelium />} />
                <Route path="/lawrencium" element={<Lawrencium />} />
                <Route path="/rutherfordium" element={<Rutherfordium />} />
                <Route path="/dubnium" element={<Dubnium />} />
                <Route path="/seaborgium" element={<Seaborgium />} />
                <Route path="/bohrium" element={<Bohrium />} />
                <Route path="/hassium" element={<Hassium />} />
                <Route path="/meitnerium" element={<Meitnerium />} />
                <Route path="/darmstadtium" element={<Darmstadtium />} />
                <Route path="/roentgenium" element={<Roentgenium />} />
                <Route path="/copernicium" element={<Copernicium />} />
                <Route path="/nihonium" element={<Nihonium />} />
                <Route path="/flerovium" element={<Flerovium />} />
                <Route path="/moscovium" element={<Moscovium />} />
                <Route path="/livermorium" element={<Livermorium />} />
                <Route path="/tennessine" element={<Tennessine />} />
                <Route path="/oganesson" element={<Oganesson />} />
                <Route path="/ions" element={<Ions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </HashRouter>

      </React.Fragment>
    );
  }
}

export default App;
