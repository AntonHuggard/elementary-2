import React, { Component } from 'react'
import magnifyingGlass from './imgs/mgnf_glss_gry.png';

class SearchBar extends Component {

    render() {
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
                        placeholder="Search elements... "
                        id = "element_io"
                        onKeyUp={e => {
                            this.props.onHandleQuery(e.target.value);
                        }}
                        />
                    <span 
                        className='unselectable'
                        id='filter-menu' 
                        onClick={this.props.onHandleFilter}
                        >filter &#8595;</span>
                    <div id='filter-accordian' className='hide-me'>
                        <button onClick={e => {this.props.onSelectFilter('s-block')}}>s-block</button>
                        <button >p-block</button>
                        <button >d-block</button>
                        <button >f-block</button>
                        <button >radioactive</button>
                        <button >solid</button>
                        <button >liquid</button>
                        <button >gas</button>
                        <button >metal</button>
                        <button >metalloid</button>
                        <button >non-metal</button>
                        <button >synthetic</button>
                    </div>
                </div>
        );
    }
}

export default SearchBar;