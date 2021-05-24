import React, { useRef, useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import classes from './NewUser.module.css';

const NewUser = props => {

    // const [userName, setUserName] = useState('');
    // const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    // uncontrolled form elements
    const inputNameRef = useRef();
    const inputAgeRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();

        const userName = inputNameRef.current.value;
        const userAge = inputAgeRef.current.value;

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if (+userAge < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid  age (> 0).'
            });
            return;
        }

        // console.log(userName, userAge);
        props.addedUserInfo(userName, userAge);

        // setUserName('');
        // setUserAge('');
        
        // we should not use this way normally to manipulate DOM using Refs
        // but here it is used only for clearing input field ... so acceptable
        inputNameRef.current.value = '';
        inputAgeRef.current.value = '';

    };

    // const usernameChangedHandler = (event) => {
    //     setUserName(event.target.value);
    // };

    // const ageChangedHandler = (event) => {
    //     setUserAge(event.target.value);
    // };

    const onClearError = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={onClearError} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type='text' ref={inputNameRef} />

                    <label htmlFor="age">Age</label>
                    <input id="age" type='number' ref={inputAgeRef} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default NewUser;