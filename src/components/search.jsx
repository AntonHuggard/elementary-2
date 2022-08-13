import React, { Component } from 'react'
import magnifyingGlass from './imgs/mgnf_glss_gry.png';

class SearchBar extends Component {

    render() {
        return ( 
            <div id="element_search_container" >
                <input 
                    value={this.props.value} 
                    type="text" 
                    placeholder="Search elements... "
                    id = "element_io"
                    onKeyUp={e => {
                        this.props.onHandleQuery(e.target.value);
                    }}
                    />
                <img src={magnifyingGlass} alt="elementary, Watson" />
            </div>
        );
    }
}

export default SearchBar;