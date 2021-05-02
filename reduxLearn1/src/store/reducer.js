import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            };//push changes the orginal property, but concat is used to immutably adding a new item
        case actionTypes.DELETE_RESULT:
            //1 way to immutably update array
            // const id =2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            //2nd way
            const updatedArray = state.results.filter(result => result.id !== action.elId);
            return {
                ...state,
                results: updatedArray
            };

    }

    return state;
};

export default reducer;