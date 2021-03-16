import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const togglBtnRef = useRef(null);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        // http requests...
        // const timer = setTimeout(() => {
        //     alert("saved data to cloud");
        // }, 1000);
        togglBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log("[Cockpit.js] cleanup work in useEffect")
        };// it runs BEFORE main useEffect function runs, but AFTER (first) render cycle
    }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log("[Cockpit.js] cleanup work in 2nd useEffect")
        };// it runs BEFORE main useEffect function runs, but AFTER (first) render cycle
    });

    // useEffect(() => {
    //     console.log('Cockpit js useEffect');
    // }, []); // []: is used for initial state

    // useEffect(() => {
    //     console.log('Cockpit js useEffect');
    // }, [something]); When { something } is changed call print 'Cockpit js useEffect'

    // useEffect(() => {
    // return () => console.log('unmount'); // return and unmount
    // }, []);

    const assignedClasses = [];
    let btnClass = "";

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working...</p>
            <button ref={togglBtnRef} className={btnClass} onClick={props.toggler}>Show Persons</button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(Cockpit); //memoization of cockpit component -- used so that
// cockpit component is re-rendered only when the input to it changes.... so if parent
// component wants to re-render this cockpit component will only show 
// the stored component as(only if) no input has been changed
//this is similar to using shouldcomponent update in class based comps