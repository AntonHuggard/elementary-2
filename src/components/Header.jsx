import React, { Component } from 'react';
import gear from '../imgs/Gear_icon.svg';
import menu from '../imgs/Hamburger_icon.svg';

class Header extends Component {

    handleShowMenu = () => {
        const side_menu = document.getElementById('side-menu');
        side_menu.classList.remove('hide-menu');
    }

    showSettings = () => {
        document.getElementById("settings-wrapper").classList.remove("hide-me");
    }

    render() {

        let headerText = `<div class='desktop-only-text'>Searchable</div> periodic table`;
        if (this.props.language === "mi") headerText = `Ripanga ngota`;

        return (
            <header>
                <div id='page-menu' className="header-clickable" onClick={this.handleShowMenu}>
                    <img src={menu} alt="navigation menu" />
                    <span className='unselectable top-menu-txt'>menu</span>
                </div>
                <h1 dangerouslySetInnerHTML={{ __html: headerText }}></h1>
                {this.props.pageSettings ? 
                    <div id="page-settings" className="header-clickable" onClick={this.showSettings}>
                        <img src={gear} alt="settings" />
                        <span className='unselectable top-menu-txt'>settings</span>
                    </div> : <div></div>
                }
            </header>
        )
    }
}

export default Header;