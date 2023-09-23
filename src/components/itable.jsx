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
                    <label className='ion-col-1'>-1</label>
                    <label className='ion-col-2'>-2</label>
                    <label className='ion-col-3'>-3</label>
                    <label className='ion-col-4'>+1</label>
                    <label className='ion-col-5'>+2</label>
                    <label className='ion-col-6'>+3</label>
                    {this.props.ions.map(i => (
                        <Ion key={i.id} ion={i}/>
                        ))
                        }
                </div>
        );
    }
}

export default IonTable;