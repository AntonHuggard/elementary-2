import React, { Component } from 'react'

class SideMenu extends Component {

    handleCloseMenu = () => {
        const side_menu = document.getElementById('side-menu');
        side_menu.classList.add('hide-menu');
    }


    render() {
        return (
            <div id="side-menu" className='hide-menu'>
                <button onClick={this.handleCloseMenu} id='close-side-menu'>close menu</button>
                <a href="/#/help">instructions/help</a>
                <a href="/#/about">about</a>
                <button>quiz</button>
                <button onClick={this.props.onHandleToggleUnits}>{this.props.units}</button>
                <button>secret button</button>
                <button>super secret button</button>
            </div>
        );
    }
}
export default SideMenu;