import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages/Messages.js';
import Name from './Name/Name.js';

class App extends Component {

  render() {
    return (
    <div>
         <div>
            <Name color='red' width='200px'></Name>
         </div>
          <div>
            <Messages color='blue' width='300px'></Messages>
            <Messages color='purple' width='300px'></Messages>
          </div>
    </div>
    );
  }
}

export default App;
