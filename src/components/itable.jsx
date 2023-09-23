import React, { Component } from 'react'
import Ion from './ion'

class IonTable extends Component {

    render() {
        // console.log(this.props.ions);
        // this.props.ions.forEach(i => {
        //     console.log(i.html)
        // });
        return ( 
                <div id="ion-table">
                {this.props.ions.map(i => (
                    <Ion ion={i}/>
                    ))
                    }
                </div>
        );
    }
}

export default IonTable;