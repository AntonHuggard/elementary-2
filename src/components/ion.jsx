import React from 'react';

class Ion extends React.Component {

    render() {

        const chrg = this.props.ion.charge;
        const chargeColumn = chrg > 0? chrg + 3: Math.abs(chrg) ;
        const ionClasses = "ion-box ion-col-"+chargeColumn
        const ionID = 'ion-'+this.props.ion.id

        return (
                <div className={ionClasses} id={ionID}>
                    <p dangerouslySetInnerHTML={{ __html: this.props.ion.html }}></p>
                    <p className="ion-name">{this.props.ion.name}</p>
                </div>
        )
    }
}

export default Ion;