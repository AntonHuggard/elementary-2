import React, { Component } from 'react'
import magnifyingGlass from '../imgs/mgnf_glss_gry.png';

class SearchBar extends Component {

    state = {
        mouseOver: false,
    }
    

    handleFilter = () => {
        const filter_btn = document.getElementById('filter-menu');
        const magnifying_glass = document.getElementById('query-img');
        const filter_menu = document.getElementById('filter-accordian');
        filter_btn.classList.toggle('expanded');
        magnifying_glass.classList.toggle('expanded');
        filter_menu.classList.toggle('hide-me');
    }

    clearSearch = () => {
        document.getElementById("element_io").value = "";
        this.props.onHandleQuery("");
    }

    handler = () => {
        // if (! this.state.mouseOver) {console.log('click');}
    }

    mouseEnter = () => {this.setState({ mouseOver : true });}
    mouseExit = () => {this.setState({ mouseOver : false });}

    

    render() {
        
        let placeholderText = "Search elements... ";
        if (this.props.language === "mi") placeholderText = `Ngā huānga rapu`;

        let dropdownText = "filter";
        if (this.props.language === "mi") dropdownText = `tātari`;

        let optionNoFilter = "no filter";
        if (this.props.language === "mi") optionNoFilter = `kahore he tātari`;

        let optionSolid = "solid";
        if (this.props.language === "mi") optionSolid = `mārō`;

        let optionLiquid = "liquid";
        if (this.props.language === "mi") optionLiquid = `wai`;

        let optionGas = "gas";
        if (this.props.language === "mi") optionGas = `hau`;
        const optionSynthetic = (this.props.language === "mi") ? `horihori` : `synthetic`;

        return ( 
            
                <div id="element_search_container" className='not-selectable' onClick={this.handler}>
                    <img 
                        id='query-img'
                        src={magnifyingGlass} 
                        alt="elementary, Watson" 
                        className='' 
                        />
                    <input 
                        value={this.props.value} 
                        type="text" 
                        placeholder={placeholderText}
                        id = "element_io"
                        onKeyUp={e => {
                            this.props.onHandleQuery(e.target.value);
                        }}
                        />
                    <div className="white-backgrd">
                        <button
                            id="clear-search-btn"
                            className="white-backgrd hide-me"
                            title="clear text"
                            onClick={this.clearSearch}>&times;</button>
                    </div>
                    <span 
                        className='unselectable'
                        id='filter-menu' 
                        onClick={this.handleFilter}
                        >{dropdownText} &#8595;</span>
                    <div 
                        id='filter-accordian' 
                        className='hide-me'  
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseExit}
                        >
                        <button onClick={e => {this.props.onSelectFilter('clear')}}>{optionNoFilter}</button>
                        <button onClick={e => {this.props.onSelectFilter('s-block')}}>s-block</button>
                        <button onClick={e => {this.props.onSelectFilter('p-block')}}>p-block</button>
                        <button onClick={e => {this.props.onSelectFilter('d-block')}}>d-block</button>
                        <button onClick={e => {this.props.onSelectFilter('f-block')}}>f-block</button>
                        <button onClick={e => {this.props.onSelectFilter('radioactive')}}>radioactive</button>
                        <button onClick={e => {this.props.onSelectFilter('solid')}}>{optionSolid}</button>
                        <button onClick={e => {this.props.onSelectFilter('liquid')}}>{optionLiquid}</button>
                        <button onClick={e => {this.props.onSelectFilter('gas')}}>{optionGas}</button>
                        <button onClick={e => {this.props.onSelectFilter('metal')}}>metal</button>
                        <button onClick={e => {this.props.onSelectFilter('metalloid')}}>metalloid</button>
                        <button onClick={e => {this.props.onSelectFilter('nonmetal')}}>non-metal</button>
                        <button onClick={e => {this.props.onSelectFilter('synthetic')}}>{optionSynthetic}</button>
                    </div>
                </div>
        );
    }
}

export default SearchBar;