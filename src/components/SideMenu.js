import React, { Component } from 'react'

class SideMenu extends Component {

    handleCloseMenu = () => {
        const side_menu = document.getElementById('side-menu');
        side_menu.classList.add('hide-menu');
    }


    render() {
        return (
            <div id="side-menu" className='hide-menu'>
                <button onClick={this.handleCloseMenu} id='close-side-menu'>close settings</button>
                <button onClick={this.props.onHandleToggleUnits}>{this.props.units}</button>
                <button>quiz</button>
                <button>help</button>
            </div>
        );
    }
}
export default SideMenu;