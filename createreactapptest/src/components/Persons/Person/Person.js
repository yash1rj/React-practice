import React, { Component } from 'react';
import classes from './Person.module.css';
// import styled from 'styled-components';
// import Radium from 'radium';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px): {
//         width: '450px'
//     }
// `;
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering..');
        // const style = {
        //     '@media (min-width: 500px)': {
        //         width: '450px'
        //     }
        // }

        return (
            //<div className={classes.Person}>
            <Aux>
                {/* <StyledDiv> */}
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please login in</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.change}
                    value={this.props.name}
                />
                {/* </StyledDiv> */}
            </Aux>
            //</div >
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    chanfed: PropTypes.func
};

export default withClass(Person, classes.Person);