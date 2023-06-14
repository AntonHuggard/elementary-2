import React, { Component } from 'react'

class SideMenu extends Component {

    closeMenu = () => {
        const side_menu = document.getElementById('side-menu');
        side_menu.classList.add('hide-menu');
    }

    render() {
        return (
            <div id="side-menu" className='hide-menu'>
                <button onClick={this.closeMenu} id='close-side-menu'>close menu</button>
                <button onClick={this.props.onToggleUnits}>{this.props.units}</button>
                <a href="/#/help">instructions/help</a>
                <a href="/#/about">about</a>
                {/* <button>quiz</button> */}
                <button>secret button</button>
                <button onClick={this.props.onToggleLanguage} dangerouslySetInnerHTML={{ __html: this.props.language }}></button>
            </div>
        );
    }
}
export default SideMenu;