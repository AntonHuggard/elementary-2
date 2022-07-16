import './App.css';
import PeriodicTable from './components/ptable';
import SearchBar from './components/search';
import React, { Component } from 'react';

class App extends Component {

  state = {
    atoms: [
        {name:'Hydrogen ',       symbol: 'H',   id:  1,  atomic_number:  1, primary_class: "non-metal", },
        {name:'Helium ',         symbol: 'He',  id:  2,  atomic_number:  2, primary_class: "noble-gas",},
        {name:'Lithium ',        symbol: 'Li',  id:  3,  atomic_number:  3, primary_class: "alkali-metal",},
        {name:'Beryllium ',      symbol: 'Be',  id:  4,  atomic_number:  4, primary_class: "alkaline-earth-metal",},
        {name:'Boron ',          symbol: 'B',   id:  5,  atomic_number:  5, primary_class: "metalloid",},
        {name:'Carbon ',         symbol: 'C',   id:  6,  atomic_number:  6, primary_class: "non-metal",},
        {name:'Nitrogen ',       symbol: 'N',   id:  7,  atomic_number:  7, primary_class: "non-metal",},
        {name:'Oxygen ',         symbol: 'O',   id:  8,  atomic_number:  8, primary_class: "non-metal",},
        {name:'Fluorine ',       symbol: 'F',   id:  9,  atomic_number:  9, primary_class: "non-metal",},
        {name:'Neon ',           symbol: 'Ne',  id: 10,  atomic_number: 10, primary_class: "noble-gas",},
        {name:'sodium ',         symbol: 'Na',  id: 11,  atomic_number: 11, primary_class: "alkali-metal",},
        {name:'magnesium ',      symbol: 'Mg',  id: 12,  atomic_number: 12, primary_class: "alkaline-earth-metal",},
        {name:'aluminium ',      symbol: 'Al',  id: 13,  atomic_number: 13, primary_class: "metaux_pauvres",},
        {name:'silicon ',        symbol: 'Si',  id: 14,  atomic_number: 14, primary_class: "metalloid",},
        {name:'phosphorus ',     symbol: 'P',   id: 15,  atomic_number: 15, primary_class: "non-metal",},
        {name:'sulphur ',        symbol: 'S',   id: 16,  atomic_number: 16, primary_class: "non-metal",},
        {name:'chlorine ',       symbol: 'Cl',  id: 17,  atomic_number: 17, primary_class: "non-metal",},
        {name:'argon ',          symbol: 'Ar',  id: 18,  atomic_number: 18, primary_class: "noble-gas",},
        {name:'potassium ',      symbol: 'K',   id: 19,  atomic_number: 19, primary_class: "alkali-metal",},
        {name:'calcium ',        symbol: 'Ca',  id: 20,  atomic_number: 20, primary_class: "alkaline-earth-metal",},
        {name:'scandium ',       symbol: 'Sc',  id: 21,  atomic_number: 21, primary_class: "transition-metal",},
        {name:'titanium ',       symbol: 'Ti',  id: 22,  atomic_number: 22, primary_class: "transition-metal",},
        {name:'vanadium ',       symbol: 'V',   id: 23,  atomic_number: 23, primary_class: "transition-metal",},
        {name:'chromium ',       symbol: 'Cr',  id: 24,  atomic_number: 24, primary_class: "transition-metal",},
        {name:'manganese ',      symbol: 'Mn',  id: 25,  atomic_number: 25, primary_class: "transition-metal",},
        {name:'iron ',           symbol: 'Fe',  id: 26,  atomic_number: 26, primary_class: "transition-metal",},
        {name:"cobalt ",         symbol: 'Co',  id: 27,  atomic_number: 27, primary_class: 'transition-metal',},    
        {name:"nickel ",         symbol: 'Ni',  id: 28,  atomic_number: 28, primary_class: 'transition-metal',},    
        {name:"copper ",         symbol: 'Cu',  id: 29,  atomic_number: 29, primary_class: 'transition-metal',}, 
        {name:"zinc ",           symbol: 'Zn',  id: 30,  atomic_number: 30, primary_class: 'transition-metal',}, 
        {name:"gallium ",        symbol: 'Ga',  id: 31,  atomic_number: 31, primary_class: 'metaux_pauvres',}, 
        {name:"germanium ",      symbol: 'Ge',  id: 32,  atomic_number: 32, primary_class: 'metalloid',}, 
        {name:"arsenic ",        symbol: 'As',  id: 33,  atomic_number: 33, primary_class: 'metalloid',},    
        {name:"selenium ",       symbol: 'Se',  id: 34,  atomic_number: 34, primary_class: 'non-metal',},    
        {name:"bromine ",        symbol: 'Br',  id: 35,  atomic_number: 35, primary_class: 'non-metal',},
        {name:"krypton ",        symbol: 'Kr',  id: 36,  atomic_number: 36, primary_class: 'noble-gas',},
        {name:"rubidium ",       symbol: 'Rb',  id: 37,  atomic_number: 37, primary_class: 'alkali-metal',}, 
        {name:"strontium ",      symbol: 'Sr',  id: 38,  atomic_number: 38, primary_class: 'alkaline-earth-metal',},    
        {name:"yttrium ",        symbol: 'Y',   id: 39,  atomic_number: 39, primary_class: 'transition-metal',},    
        {name:"zirconium ",      symbol: 'Zr',  id: 40,  atomic_number: 40, primary_class: 'transition-metal',},    
        {name:"niobium ",        symbol: 'Nb',  id: 41,  atomic_number: 41, primary_class: 'transition-metal',}, 
        {name:"molybdenum ",     symbol: 'Mo',  id: 42,  atomic_number: 42, primary_class: 'transition-metal',}, 
        {name:"technetium ",     symbol: 'Tc',  id: 43,  atomic_number: 43, primary_class: 'transition-metal',}, 
        {name:"ruthenium ",      symbol: 'Ru',  id: 44,  atomic_number: 44, primary_class: 'transition-metal',}, 
        {name:"rhodium ",        symbol: 'Rh',  id: 45,  atomic_number: 45, primary_class: 'transition-metal',}, 
        {name:"palladium ",      symbol: 'Pd',  id: 46,  atomic_number: 46, primary_class: 'transition-metal',}, 
        {name:"silver ",         symbol: 'Ag',  id: 47,  atomic_number: 47, primary_class: 'transition-metal',}, 
        {name:"cadmium ",        symbol: 'Cd',  id: 48,  atomic_number: 48, primary_class: 'transition-metal',},
        {name:"indium ",         symbol: 'In',  id: 49,  atomic_number: 49, primary_class: 'metaux_pauvres',},                
        {name:"tin ",            symbol: 'Sn',  id: 50,  atomic_number: 50, primary_class: 'metaux_pauvres',},                
        {name:"antimony ",       symbol: 'Sb',  id: 51,  atomic_number: 51, primary_class: 'metalloid',},                
        {name:"tellurium ",      symbol: 'Te',  id: 52,  atomic_number: 52, primary_class: 'metalloid',},                
        {name:"iodine ",         symbol: 'I',   id: 53,  atomic_number: 53, primary_class: 'non-metal',},                
        {name:"xenon ",          symbol: 'Xe',  id: 54,  atomic_number: 54, primary_class: 'noble-gas',},
        {name:"caesium ",        symbol: 'Cs',  id: 55,  atomic_number: 55, primary_class: 'alkali-metal',},                
        {name:"barium ",         symbol: 'Ba',  id: 56,  atomic_number: 56, primary_class: 'alkaline-earth-metal',},
        {name:"lanthanum ",      symbol: 'La',  id: 57,  atomic_number: 57, primary_class: 'lanthanoid',},                 
        {name:"cerium ",         symbol: 'Ce',  id: 58,  atomic_number: 58, primary_class: 'lanthanoid',},               
        {name:"praseodymium ",   symbol: 'Pr',  id: 59,  atomic_number: 59, primary_class: 'lanthanoid',},               
        {name:"neodymium ",      symbol: 'Nd',  id: 60,  atomic_number: 60, primary_class: 'lanthanoid',},                
        {name:"promethium ",     symbol: 'Pm',  id: 61,  atomic_number: 61, primary_class: 'lanthanoid',},                
        {name:"samarium ",       symbol: 'Sm',  id: 62,  atomic_number: 62, primary_class: 'lanthanoid',},                
        {name:"europium ",       symbol: 'Eu',  id: 63,  atomic_number: 63, primary_class: 'lanthanoid',},               
        {name:"gadolinium ",     symbol: 'Gd',  id: 64,  atomic_number: 64, primary_class: 'lanthanoid',},                
        {name:"terbium ",        symbol: 'Tb',  id: 65,  atomic_number: 65, primary_class: 'lanthanoid',},                
        {name:"dysprosium ",     symbol: 'Dy',  id: 66,  atomic_number: 66, primary_class: 'lanthanoid',},                
        {name:"holmium ",        symbol: 'Ho',  id: 67,  atomic_number: 67, primary_class: 'lanthanoid',},                
        {name:"erbium ",         symbol: 'Er',  id: 68,  atomic_number: 68, primary_class: 'lanthanoid',},                
        {name:"thulium ",        symbol: 'Tm',  id: 69,  atomic_number: 69, primary_class: 'lanthanoid',},                
        {name:"ytterbium ",      symbol: 'Yb',  id: 70,  atomic_number: 70, primary_class: 'lanthanoid',},                
        {name:"lutetium ",       symbol: 'Lu',  id: 71,  atomic_number: 71, primary_class: 'lanthanoid',},       
        {name:"hafnium ",        symbol: 'Hf',  id: 72,  atomic_number: 72, primary_class: 'transition-metal',},                
        {name:"tantalum ",       symbol: 'Ta',  id: 73,  atomic_number: 73, primary_class: 'transition-metal',},                
        {name:"tungsten ",       symbol: 'W',   id: 74,  atomic_number: 74, primary_class: 'transition-metal',},
        {name:"rhenium ",        symbol: 'Re',  id: 75,  atomic_number: 75, primary_class: 'transition-metal',},                
        {name:"osmium ",         symbol: 'Os',  id: 76,  atomic_number: 76, primary_class: 'transition-metal',},                
        {name:"iridium ",        symbol: 'Ir',  id: 77,  atomic_number: 77, primary_class: 'transition-metal',},                
        {name:"platinum ",       symbol: 'Pt',  id: 78,  atomic_number: 78, primary_class: 'transition-metal',},                
        {name:"gold ",           symbol: 'Au',  id: 79,  atomic_number: 79, primary_class: 'transition-metal',},                
        {name:"mercury ",        symbol: 'Hg',  id: 80,  atomic_number: 80, primary_class: 'transition-metal',},             
        {name:"thallium ",       symbol: 'Tl',  id: 81,  atomic_number: 81, primary_class: 'metaux_pauvres',},                
        {name:"lead ",           symbol: 'Pb',  id: 82,  atomic_number: 82, primary_class: 'metaux_pauvres',},                
        {name:"bismuth ",        symbol: 'Bi',  id: 83,  atomic_number: 83, primary_class: 'metaux_pauvres',},                
        {name:"polonium ",       symbol: 'Po',  id: 84,  atomic_number: 84, primary_class: 'metaux_pauvres',},                
        {name:'astatine ',       symbol: 'At',  id: 85,  atomic_number: 85, primary_class: 'metalloid',},    
        {name:'radon ',          symbol: 'Rn',  id: 86,  atomic_number: 86, primary_class: 'noble-gas',},   
        {name:'francium ',       symbol: 'Fr',  id: 87,  atomic_number: 87, primary_class: 'alkali-metal',},    
        {name:'radium ',         symbol: 'Ra',  id: 88,  atomic_number: 88, primary_class: 'alkaline-earth-metal',},
        {name:"actinium ",       symbol: 'Ac',  id: 89,  atomic_number: 89, primary_class: 'actinoid',},                
        {name:"thorium ",        symbol: 'Th',  id: 90,  atomic_number: 90, primary_class: 'actinoid',},
        {name:"protactinium ",   symbol: 'Pa',  id: 91,  atomic_number: 91, primary_class: 'actinoid',},
        {name:"uranium ",        symbol: 'U',   id: 92,  atomic_number: 92, primary_class: 'actinoid',},
        {name:"neptunium ",      symbol: 'Np',  id: 93,  atomic_number: 93, primary_class: 'actinoid',},
        {name:"plutonium ",      symbol: 'Pu',  id: 94,  atomic_number: 94, primary_class: 'actinoid',},
        {name:"americium ",      symbol: 'Am',  id: 95,  atomic_number: 95, primary_class: 'actinoid',},
        {name:"curium ",         symbol: 'Cm',  id: 96,  atomic_number: 96, primary_class: 'actinoid',},
        {name:"berkelium ",      symbol: 'Bk',  id: 97,  atomic_number: 97, primary_class: 'actinoid',},
        {name:"californium ",    symbol: 'Cf',  id: 98,  atomic_number: 98, primary_class: 'actinoid',},
        {name:"einsteinium ",    symbol: 'Es',  id: 99,  atomic_number: 99, primary_class: 'actinoid',},
        {name:"fermium ",        symbol: 'Fm',  id:100,  atomic_number:100, primary_class: 'actinoid',},
        {name:"mendelevium ",    symbol: 'Md',  id:101,  atomic_number:101, primary_class: 'actinoid',},
        {name:'nobelium ',       symbol:'No',   id:102,  atomic_number:102, primary_class: 'actinoid',},
        {name:'lawrencium ',     symbol:'Lr',   id:103,  atomic_number:103, primary_class: 'actinoid',},
        {name:'rutherfordium ',  symbol:'Rf',   id:104,  atomic_number:104, primary_class: 'transition-metal',},
        {name:'dubnium ',        symbol:'Db',   id:105,  atomic_number:105, primary_class: 'transition-metal',},
        {name:'seaborgium ',     symbol:'Sg',   id:106,  atomic_number:106, primary_class: 'transition-metal',},
        {name:'bohrium ',        symbol:'Bh',   id:107,  atomic_number:107, primary_class: 'transition-metal', },
        {name:'hassium ',        symbol:'Hs',   id:108,  atomic_number:108, primary_class: 'transition-metal',},    
        {name:'meitnerium ',     symbol:'Mt',   id:109,  atomic_number:109, primary_class: 'transition-metal',},  
        {name:'darmstadtium ',   symbol:'Ds',   id:110,  atomic_number:110, primary_class: 'transition-metal',},   
        {name:'roentgenium ',    symbol:'Rg',   id:111,  atomic_number:111, primary_class: 'transition-metal',},    
        {name:'copernicium ',    symbol:'Cn',   id:112,  atomic_number:112, primary_class: 'transition-metal',},
        {name:'nihonium ',       symbol:'Nh',   id:113,  atomic_number:113, primary_class: 'unknown',},
        {name:'flerovium ',      symbol:'Fl',   id:114,  atomic_number:114, primary_class: 'unknown',},    
        {name:'moscovium ',      symbol:'Mc',   id:115,  atomic_number:115, primary_class: 'unknown',},    
        {name:'livermorium ',    symbol:'Lv',   id:116,  atomic_number:116, primary_class: 'unknown',},    
        {name:'tennessine ',     symbol:'Ts',   id:117,  atomic_number:117, primary_class: 'unknown',},    
        {name:'oganesson ',      symbol:'Og',   id:118,  atomic_number:118, primary_class: 'unknown',},
     ],
    lowOpacity: "25%",
  };

  showElements = (show) => {
    let htmlAtoms = document.getElementsByClassName('element-tile');
    for (var i = htmlAtoms.length -1; i >= 0; i--) {
      htmlAtoms[i].style.opacity = show? "100%" : this.state.lowOpacity;
    }
  }

  handleQuery = (query) => {
      query === "" ? this.showElements(true): this.showElements(false);
      let results = [];
      query = query.toUpperCase();

      // search by chemical symbol
      if ( (query.length < 3) && (query.match(/[A-Z]{1,2}$/i)) ) {

        this.state.atoms.forEach(element => {
            if (element.symbol.includes(query) || query === element.symbol.toUpperCase()) results.push(element);
        });
      } else { // search by name
        this.state.atoms.forEach(element => {
          if (element.name.toUpperCase().includes(query)) results.push(element)
        });
      }
      

      results.forEach(atom => {
        let htmlAtom = document.getElementById(atom.symbol);
        htmlAtom.style.opacity = "100%";
      });

  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Chem.JS</h1>
          <h3>the searchable periodic table</h3>
        </header>
        <SearchBar
          onHandleQuery={this.handleQuery}
        />
        <PeriodicTable 
          atoms={this.state.atoms}
        />
      </React.Fragment>
    );
  }
}

export default App;
