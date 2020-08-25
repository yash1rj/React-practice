import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator';
import Chars from './Chars/Chars';

class App extends Component {

  state = {
    userInput : ""
  }

  lenghtChangeListener = (event) => {
    this.setState({userInput : event.target.value})
  }

  deleteCharHandler = (index) => {
    let uInput = this.state.userInput.split("");
    uInput.splice(index, 1);
    uInput = uInput.join("");
    // console.log(uInput);
    this.setState({userInput : uInput})
  }

  render() {
    return (
      <div className="App">
        <hr />
        <input type="text" onChange={this.lenghtChangeListener} value={this.state.userInput} />
        <hr />
        <p>{this.state.userInput}</p>
        <Validator len={this.state.userInput.length} />
        {this.state.userInput.split("").map((chr, index) =>
          <Chars key={index} char={chr} click={() => this.deleteCharHandler(index)} />
        )}
      </div>
    );
  }

}

export default App;