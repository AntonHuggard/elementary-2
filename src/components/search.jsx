import React, { Component } from 'react'
import magnifyingGlass from '../imgs/mgnf_glss_gry.png';

class SearchBar extends Component {

    render() {
        
        let placeholderText = "Search elements... ";
        if (this.props.language !== "English") placeholderText = `Ngā huānga rapu`;

        let dropdownText = "filter";
        if (this.props.language !== "English") dropdownText = `tātari`;

        return ( 
            
                <div id="element_search_container" >
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
                    <span 
                        className='unselectable'
                        id='filter-menu' 
                        onClick={this.props.onHandleFilter}
                        >{dropdownText} &#8595;</span>
                    <div id='filter-accordian' className='hide-me'>
                        <button onClick={e => {this.props.onSelectFilter('clear')}}>no filter</button>
                        <button onClick={e => {this.props.onSelectFilter('s-block')}}>s-block</button>
                        <button onClick={e => {this.props.onSelectFilter('p-block')}}>p-block</button>
                        <button onClick={e => {this.props.onSelectFilter('d-block')}}>d-block</button>
                        <button onClick={e => {this.props.onSelectFilter('f-block')}}>f-block</button>
                        <button onClick={e => {this.props.onSelectFilter('radioactive')}}>radioactive</button>
                        <button onClick={e => {this.props.onSelectFilter('solid')}}>solid</button>
                        <button onClick={e => {this.props.onSelectFilter('liquid')}}>liquid</button>
                        <button onClick={e => {this.props.onSelectFilter('gas')}}>gas</button>
                        <button onClick={e => {this.props.onSelectFilter('metal')}}>metal</button>
                        <button onClick={e => {this.props.onSelectFilter('metalloid')}}>metalloid</button>
                        <button onClick={e => {this.props.onSelectFilter('nonmetal')}}>non-metal</button>
                        <button onClick={e => {this.props.onSelectFilter('synthetic')}}>synthetic</button>
                    </div>
                </div>
        );
    }
}

export default SearchBar;