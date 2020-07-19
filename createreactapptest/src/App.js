import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 26 },
      { name: "Manu", age: 25 },
      { name: "Ram", age: 28 }
    ],
    otherState: "some state"
  };

  switchNameHandler = (newName) => {
    // console.log("Got clicked!");
    // DON'T USE : this.state.persons[0].name = "Raj"
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: "Manu", age: 30 },
        { name: "Ram", age: 28 }
      ]
    });
    // this will shallow merge with the state object
    // i.e. no effect on "otherState" property of state object
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 26 },
        { name: "Manu", age: 28 },
        { name: event.target.value, age: 30 }
      ]
    });
    // this will shallow merge with the state object
    // i.e. no effect on "otherState" property of state object
  }

  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Yash!!")}>Click</button>
        <button style={style} onClick={() => this.switchNameHandler("Yash1rj !!")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, "Yash Raj")}>
          My hobby is Travelling.
        </Person>
        <Person change={this.nameChangeHandler} name={this.state.persons[2].name} 
         age={this.state.persons[2].age} />
      </div>
    )
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, "Hello, React!"));
  }
}

export default App;
