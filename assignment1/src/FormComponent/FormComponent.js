import React, { useState } from 'react';
import Input from './Input/Input';

// Create a simple form to accept three text fields.
// Name, designation, location.
// The fields should not be null and should not contain numbers.

const FormComponent = () => {

    const [name, setName] = useState();
    const [designation, setDesignation] = useState();
    const [location, setLocation] = useState();

    const nameChangedHandler = (event) => {
        // console.log(event.target);
        let nameVal = event.target.value;

        if((/[0-9]/g).test(nameVal)) {
            console.log("Name contains number");
        }

        if(nameVal !== "" || (/^[0-9]/).test(nameVal) ) {
            setName(nameVal);
        }
    };

    const designationChangedHandler = (event) => {
        let designationVal = event.target.value;

        if((/[0-9]/g).test(designationVal)) {
            console.log("Designation contains number");
        }

        if(designationVal !== "" ||  (/[0-9]/g).test(designationVal)) {
            setDesignation(designationVal);
        }
    };

    const locationChangedHandler = (event) => {
        let locationVal = event.target.value;

        if((/[0-9]/g).test(locationVal)) {
            console.log("Location contains number");
        }

        if(locationVal !== "" || (/[0-9]/g).test(locationVal)) {
            setLocation(locationVal);
        }
    };

    return (
        <form>
            <Input title="Name" type="text" value={name} onChange={nameChangedHandler} />
            <Input title="Designation" type="text" value={designation} onChange={designationChangedHandler} />
            <Input title="Location" type="text" value={location} onChange={locationChangedHandler} />
        </form>
    );
};

export default FormComponent;