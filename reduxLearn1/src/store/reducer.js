const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({...state}); // still not a deep copy
            newState.counter = state.counter +1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };// copy state and then update only counter property and not touching the results property
        case 'ADDFIVE':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUBTRACTFIVE':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };//push changes the orginal property, but concat is used to immutably adding a new item
    }

    return state;
};

export default reducer;