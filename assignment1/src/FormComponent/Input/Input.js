import React from 'react';


// Create a simple form to accept three text fields.
// Name, designation, location.
// The fields should not be null and should not contain numbers.
const Input = (props) => {
    return (
            <div>
                <label>{props.title}</label>
                <input type={props.type} value={props.value} onChange={(event) => props.onChange(event)} />
            </div>

    );
};

export default Input;