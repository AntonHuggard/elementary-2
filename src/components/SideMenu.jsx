import React, { Component } from 'react'


const languages = {
    // NOTE there is a switcharoo on the full text name of the languages
    // This is because when it's in English you KNOW it's in English. 
    // It should be really obvious that clicking this toggles the language
    'en': 'M&amacr;ori',
    'mi': 'English'
}

class SideMenu extends Component {

    closeMenu = () => {
        const side_menu = document.getElementById('side-menu');
        side_menu.classList.add('hide-menu');
    }
    

    render() {
        const language_full_text = languages[this.props.language];


        return (
            <div id="side-menu" className='hide-menu'>
                <button onClick={this.closeMenu} id='close-side-menu'>close menu</button>
                <button onClick={this.props.onToggleUnits}>{this.props.units}</button>
                <a href="/#/help">instructions/help</a>
                <a href="/#/about">about</a>
                {/* <button>quiz</button> */}
                <a href="/#/ions">table of ions</a>
                <button 
                    onClick={this.props.onToggleLanguage} 
                    dangerouslySetInnerHTML={{ __html:language_full_text }}></button>
            </div>
        );
    }
}
export default SideMenu;