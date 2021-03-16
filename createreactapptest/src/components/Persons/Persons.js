import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // we can extend pureComponent and not use shouldComponent if we  
    // have to check every or main props changes coming to the component
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     // we have to return true/false based on condition which detrmines continuing update or not
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.clicked !== this.props.clicked || 
    //         nextProps.changed !== this.props.changed
    //     ) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot' }; // use for eg returning scroll position
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot); // use the scroll position before the update for manipulating current scroll position
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount");
    }

    render() {
        console.log('[Persons.js] rendering..');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    change={(event) => { this.props.changed(event, person.id) }} />
            );
        });
    }
}


export default Persons;