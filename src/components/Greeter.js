import React from 'react';

class Greeter extends React.Component {
    render(){
        return (
            <h1 id={this.props.id}>
                Hello, {this.props.name || 'Folks'}!
            </h1>
        )
    }
}

export default Greeter;