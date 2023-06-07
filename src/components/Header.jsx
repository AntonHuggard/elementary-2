import React, { Component } from 'react';

class Header extends Component {

    handleShowMenu = () => {
        const side_menu = document.getElementById('side-menu');
        side_menu.classList.remove('hide-menu');
    }

    render() {

        return (
            <header>
                <h1><div className='opt-title'>Searchable</div> periodic table</h1>
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