import React from 'react';

class Ion extends React.Component {

    render() {

        return (
                <div class="ion">
                    <p dangerouslySetInnerHTML={{ __html: this.props.ion.html }}></p>
                    <label>{this.props.ion.name}</label>
                </div>
        )
    }
}

export default Ion;