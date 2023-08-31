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

        let headerText = `<div class='opt-title'>Searchable</div> periodic table`;
        if (this.props.language === "mi") headerText = `Ripanga ngota`;

        return (
            <header>
                <div onClick={this.handleShowMenu} className="header-clickable">
                    <img src={menu} alt="navigation menu" />
                    <span 
                        id='settings-btn'  
                        className='unselectable'
                        >menu</span>
                </div>
                <h1 dangerouslySetInnerHTML={{ __html: headerText }}></h1>
                {this.props.pageSettings ? 
                    <div id="page-settings" className="header-clickable" onClick={this.showSettings}>
                        <img src={gear} alt="settings" />
                        <span className='unselectable'>settings</span>
                    </div> : <div></div>
                }
            </header>
        )
    }
}

export default Header;