import React, { Component } from 'react';

class Header extends Component {

    handleShowMenu = () => {
        const side_menu = document.getElementById('side-menu');
        side_menu.classList.remove('hide-menu');
    }

    render() {

        let headerText = `<div class='opt-title'>Searchable</div> periodic table`;
        if (this.props.language !== "English") headerText = `Ripanga ngota`;

        return (
            <header>
                <h1 dangerouslySetInnerHTML={{ __html: headerText }}></h1>
                <span 
                    id='settings-btn' 
                    onClick={this.handleShowMenu} 
                    className='unselectable'
                    >menu</span>
            </header>
        )
    }
}

export default Header;