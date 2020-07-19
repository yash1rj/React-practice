import React from 'react';

const uinput = (props) => {

    const inputStyle = {
        border: "2px solid red"
    }

    return (
        <input type="text" style={inputStyle} onChange={props.change} value={props.currentUser} />
    );
}

export default uinput;