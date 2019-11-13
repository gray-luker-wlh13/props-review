import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(){
        super();

        this.state = {
            friends: ['Reese', 'Maxwell', 'Christian']
        }
    }

    // public classfield syntax
    addFriend = () => {
        let newFriends = this.state.friends.slice();
        newFriends.push('Jacob')
        this.setState({
            friends: newFriends
        })
    }

    render(){
        const mappedFriends = this.state.friends.map((element, index) => {
            return (
                <ChildComponent 
                    key={index}
                    friend={element}
                    addFriend={this.addFriend}
                />
            )
        })
        return (
            <div>
                {mappedFriends}
                {/* <button onClick={() => this.addFriend}></button> */}
            </div>
        )
    }
}

export default ParentComponent;