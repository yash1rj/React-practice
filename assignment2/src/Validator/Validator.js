import React from 'react';

const validator = (props) => {
    return (
        <h2>{(props.len > 5 ? "text too long" : "text too short")}</h2>
    );
}

export default validator;
