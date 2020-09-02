import React, { Component } from 'react';
// import Radium, { StyleRoot} from 'radium';
// import styled from 'styled-components';
import classes from './App.module.css';

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {

  state = {
    persons: [
      { id: "dwq", name: "Max", age: 26 },
      { id: "dsa3", name: "Manu", age: 25 },
      { id: "dgfs3", name: "Ram", age: 28 }
    ],
    otherState: "some state",
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log("Got clicked!");
    // DON'T USE : this.state.persons[0].name = "Raj"
    this.setState({
      persons: [
        { id: "dwq", name: newName, age: 26 },
        { id: "dsa3", name: "Manu", age: 30 },
        { id: "dgfs3", name: "Ram", age: 28 }
      ],
      showPersons: false
    });
    // this will shallow merge with the state object
    // i.e. no effect on "otherState" property of state object
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: "Max", age: 26 },
    //     { name: "Manu", age: 28 },
    //     { name: event.target.value, age: 30 }
    //   ]   });

    // this will shallow merge with the state object
    // i.e. no effect on "otherState" property of state object

  }

  togglePersonHandler = () => {
    const willShow = this.state.showPersons;
    this.setState({ showPersons: !willShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);// alters the original list too so make a copy using spread
    this.setState({ persons: persons });
  }

  render() {

    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ':hover': {
    //     backgroundColor: "lightgreen",
    //     color: 'black'
    //   }
    // }

    let persons = null;

    if (this.state.showPersons) {

      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;

      //style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor: "salmon",
      //   color: 'black'
      // };

      // persons = (<div>
      //   <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      //   <Person
      //     name={this.state.persons[1].name}
      //     age={this.state.persons[1].age}
      //     click={this.switchNameHandler.bind(this, "Yash Raj")}>
      //     My hobby is Travelling.
      //   </Person>
      //   <Person change={this.nameChangeHandler} name={this.state.persons[2].name}
      //     age={this.state.persons[2].age} />
      // </div>)
    }



    return (
      //<StyleRoot>
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          persons={this.state.persons} 
          showPersons={this.state.showPersons} 
          toggler={this.togglePersonHandler} />
        {persons}
      </div>
      //</StyleRoot>
    )

    //<button style={style} onClick={this.switchNameHandler.bind(this, "Yash!!")}>Click</button>
    //<button style={style} onClick={() => this.switchNameHandler("Yash1rj !!")}>Switch Name</button>

    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, "Hello, React!"));
  }
}

export default App;
