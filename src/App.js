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
                <Route path="/carbon" element={<Carbon />} />
                <Route path="/fluorine" element={<Fluorine />} />
                <Route path="/neon" element={<Neon />} />
                <Route path="/oxygen" element={<Oxygen />} />
                <Route path="/gold" element={<Gold />} />
                <Route path="/iron" element={<Iron />} />
                <Route path="/actinium" element={<Actinium />} />
                <Route path="/aluminium" element={<Aluminium />} />
                <Route path="/americium" element={<Americium />} />
                <Route path="/antimony" element={<Antimony />} />
                <Route path="/ions" element={<Ions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </HashRouter>

      </React.Fragment>
    );
  }
}

export default App;
