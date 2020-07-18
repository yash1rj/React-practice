import React, { useState } from 'react';
import './App.css';

import Person from "./Person/Person"

const app = (props) => {

    const [personState, setPersonState] = useState({
        persons: [
            { name: "Max", age: 26 },
            { name: "Manu", age: 25 }
        ],
        otherstate: "some other value"
    });

    const [someState, setSomeState] = useState("value");
    // We can use multiple separated state slices to manage States with React Hooks

    const switchNameHandler = () => {
        console.log("Got clicked!");
        // DON'T USE : this.state.persons[0].name = "Raj"
        // setPersonState({
        //     persons: [
        //         { name: "Raj", age: 26 },
        //         { name: "Manu", age: 30 }
        //     ]
        // });
        // This will not shallow merge.
        // "otherState" value will get lost

        setPersonState({
            persons: [
                { name: "Raj", age: 26 },
                { name: "Manu", age: 30 }
            ],
            otherstate: personState.otherstate
        });
        // To keep other state property same as before

        console.log(someState);
    }

    return (
        <div className="App">
            <h1>Hello, React!</h1>
            <button onClick={switchNameHandler}>Click</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age} />
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobby is Travelling.</Person>
            <Person name="Ram" age="29" />
        </div>
    )
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, "Hello, React!"));
}

export default app;
