import React, { Component } from 'react'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

class Hydrogen extends Component {

    state = {
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
                <SideMenu 
                    onHandleToggleUnits={this.handleToggleUnits} 
                    units={this.state.units} />
                <h1>Hydrogen</h1>     
            </>
        );
      }
}

export default Hydrogen;