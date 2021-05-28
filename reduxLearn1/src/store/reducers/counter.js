// import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        addFive(state, action) {
            state.counter = state.counter + action.payload;
        },
        subtractFive(state, action) {
            state.counter = state.counter - action.payload;
        }
    }
});

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.INCREMENT:
//             // const newState = Object.assign({ ...state }); // still not a deep copy
//             // newState.counter = state.counter + 1;
//             // return newState;
//             return updateObject(state, { counter: state.counter + 1 });
//         case actionTypes.DECREMENT:
//             return updateObject(state, { counter: state.counter - 1 });// copy state and then update only counter property and not touching the results property
//         case actionTypes.ADDFIVE:
//             return updateObject(state, { counter: state.counter + action.value });    
//         case actionTypes.SUBTRACTFIVE:
//             return updateObject(state, { counter: state.counter - action.value });
//         default:
//             return state;
//     }

    
// };

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;