import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state= {
    username: "Pramod"
  };

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <UserInput change={this.nameChangeHandler} currentUser={this.state.username} />
        <UserOutput username="Yash" />
        <UserOutput username="Raj" />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
