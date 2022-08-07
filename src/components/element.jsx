import React from 'react';

class Element extends React.Component {

    getClasses = atom => {
        const mainClass = atom.primary_class;
        return "element-tile " + mainClass;
    }

    render() {

        return (
            <div 
            className={this.getClasses(this.props.atom)} 
            id={this.props.atom.symbol}
            onClick={ () => this.props.onHandleClick(this.props.atom) } >
                <label>{this.props.atom.atomic_number}</label>
                <p>{this.props.atom.symbol}</p>
            </div>
        )
    }
}

export default Element;