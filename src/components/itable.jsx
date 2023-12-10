import React, { Component } from 'react'
import Ion from './ion'

class IonTable extends Component {

    render() {

        return ( 
                <div id="ion-table">
                    <label id="anion-header">Anions</label>
                    <label id="cation-header">Cations</label>
                    <label className='ion-col-1 anion-chrg-hdr'>-1</label>
                    <label className='ion-col-2 anion-chrg-hdr'>-2</label>
                    <label className='ion-col-3 anion-chrg-hdr'>-3</label>
                    <label className='ion-col-4 cation-chrg-hdr'>+1</label>
                    <label className='ion-col-5 cation-chrg-hdr'>+2</label>
                    <label className='ion-col-6 cation-chrg-hdr'>+3</label>
                    {this.props.ions.map(i => (
                        <Ion key={i.id} ion={i}/>
                        ))
                        }
                </div>
        );
    }
}

export default IonTable;