import React, { Component } from 'react'

class IonToggleSwitch extends Component {

    render() {

        return ( 
            <div id="atom-control">
                <label className='toggle-label'>ion</label>
                <label className="switch">
                    <input type="checkbox" onClick={this.props.onHandleIonToggle}/>
                    <span className="toggle round"></span>
                </label>
            </div>
        );
    }
}

export default IonToggleSwitch;