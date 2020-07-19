import React from 'react';
import "./UserOutput.css";

const uoutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.username} -This is the first para</p>
            <p>This is the second para</p>
        </div>
    );
}

export default uoutput;