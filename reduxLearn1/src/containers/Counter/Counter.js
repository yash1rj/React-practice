import React, { Component } from 'react';
import {connect}  from 'react-redux';
// connect is a fn which returns a HOC

import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFiveToCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>

                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// we pass 2 info on connect
// no.1 the state slice relevant to this container
// no.2 which actions are needed to be dispatched by this container
// if we dont have actions in our container we can leave it out
// if we only need to dispatch actions and dont need state slice from store pass it as null

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddFiveToCounter: () => dispatch({type: actionTypes.ADDFIVE, value: 5}),
        onSubtractFiveToCounter: () => dispatch({type: actionTypes.SUBTRACTFIVE, value: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, counterVal: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, elId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //we execute the result of connect fn ( which is a fn ) on container