import React, { Component } from 'react'
// import gear from '../imgs/Gear_icon.svg';


const languages = {
    // NOTE there is a switcharoo on the full text name of the languages
    // This is because when it's in English you KNOW it's in English. 
    // It should be really obvious that clicking this toggles the language
    'en': 'M&amacr;ori',
    'mi': 'English'
}

class PageSettings extends Component {

    closeSettings = () => {
        // const side_menu = document.getElementById('side-menu');
        // side_menu.classList.add('hide-menu');
        console.log('close settings');
        document.getElementById("settings-wrapper").classList.add("hide-me");
    }
    

    render() {
        const language_full_text = languages[this.props.language];

        return (
            <>
            <div id="settings-wrapper" className='hide-me'>
                <div  id="settings-modal" >
                    <h2>settings</h2>
                    <hr/>
                    <div id="settings-elements">
                        <label>Temperature units</label>
                        <button onClick={this.props.onToggleUnits}>{this.props.units}</button>
                        <label>Language</label>
                        <button 
                            onClick={this.props.onToggleLanguage} 
                            dangerouslySetInnerHTML={{ __html:language_full_text }}></button>
                    </div>
                    <hr/>
                    <button onClick={this.closeSettings} id='close-settings'>back to science</button>
                </div>
            </div>
            </>
        );
    }
}
export default PageSettings;