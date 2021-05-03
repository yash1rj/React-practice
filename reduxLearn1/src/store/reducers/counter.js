import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({ ...state }); // still not a deep copy
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };// copy state and then update only counter property and not touching the results property
        case actionTypes.ADDFIVE:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACTFIVE:
            return {
                ...state,
                counter: state.counter - action.value
            };

    }

    return state;
};

export default reducer;