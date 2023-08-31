import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';
import atoms from '../components/atoms.json';

class Hydrogen extends Component {

    state = {
      atom: atoms.atoms[0],
      units: "celsius",
      };
    
    

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

      render() {
        return(
            <>
                <Header />
                <Sidenav />

                <h1>{this.state.atom.symbol}: {this.state.atom.name}</h1>  
                <p>{this.state.atom.name}</p>   
                <p>{this.state.atom.id}</p>
                <p>{this.state.atom.atomic_mass}</p>   
                <p>{this.state.atom.period}</p>   
                <p>{this.state.atom.group}</p>   
            </>
        );
      }
}

export default Hydrogen;