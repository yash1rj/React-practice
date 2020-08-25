import React from 'react';
import "./Chars.css";

const chars = (props) => {
    return (
        <div className="Chars" onClick={props.click}>{props.char}</div>
    );
}

export default chars;
