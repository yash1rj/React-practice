import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person"

class App extends Component {

  state={
    persons:[
      {name: "Max", age: 26},
      {name: "Manu", age: 25}
    ]
  };

  switchNameHandler = () => {
    console.log("Got clicked!");
    // DON'T USE : this.state.persons[0].name = "Raj"
    this.setState({
      persons:[
        {name: "Raj", age: 26},
        {name: "Manu", age: 30}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <button onClick={this.switchNameHandler}>Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is Travelling.</Person>
        <Person name="Ram" age= "29" />
      </div>
    )
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, "Hello, React!"));
  }
}

export default App;
