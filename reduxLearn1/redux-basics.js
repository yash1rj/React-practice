const redux = require('redux');
const createStore = redux.createStore;

// state could be a number, string or most oftenly JS object
const initialState = {
    counter: 0
}

// Reducer
// it gets 2 arguments : current state and action
// returns updated state

// state takes initalState value whenver state is undefined which will be the case when its creating 
// the store for the 1st time. For all subsequent actions, the reducer will have been executed one time therby
// current state would be initial state
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }; // always change state immutably
    }

    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }; // always change state immutably
    }
    return state;
};

// Store
const store = createStore(rootReducer); // requires reducer input
console.log(store.getState());


// Subscription
// subscribe fn. takes an argument, a fn. which will be executed whenever state is updated
// so whenver an action reached the reducer
store.subscribe(() => {
    console.log('[Subsciption]', store.getState());
});

// Dispatching action
// dispatch is a fn. which takes an argument i.e action - should be a JS object
// type property is mandatory , by convention use all caps string for unique identifier type
// we can add more values to object in dispatch - optional payload
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());