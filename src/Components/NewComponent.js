import React, {Component} from 'react';

class NewComponent extends Component {
    constructor(){
        super();

        this.state = {
            name: 'Kate'
        }
    }

    render(){
        return (
            <div>{this.state.name}</div>
        )
    }
}

export default NewComponent;