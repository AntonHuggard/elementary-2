import React from 'react';

class Element extends React.Component {

    getClasses = atom => {
        const mainClass = atom.primary_class;
        return "element-tile not-selectable " + mainClass;
    }

    render() {

        return (
            <div 
                className={this.getClasses(this.props.atom)} 
                id={this.props.atom.symbol}
                data-electroneg={this.props.atom.electronegativity}
                data-meltingpt={this.props.atom.melting_point}
                data-boilingpt={this.props.atom.boiling_point}
                data-discovery={this.props.atom.discovery_date}
                onClick={ () => this.props.onHandleClick(this.props.atom) }
            >
                    <label>{this.props.atom.atomic_number}</label>
                    <p>{this.props.atom.symbol}</p>
            </div>
        )
    }
}

export default Element;