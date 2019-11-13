import React, {Component} from 'react';
import NewComponent from './Components/NewComponent';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: 'Grayson'
    }
  }

  render(){
    return (
      <div className="App">
        I'm the App Component
        {this.state.name}
        <NewComponent name={this.state.name}/>
      </div>
    );
  }
}

export default App;
