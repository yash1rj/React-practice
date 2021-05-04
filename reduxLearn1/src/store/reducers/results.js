import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray =  state.results.filter(result => result.id !== action.elId);
    return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.counterVal }) });
            //push changes the orginal property, but concat is used to immutably adding a new item
        case actionTypes.DELETE_RESULT:
            //1 way to immutably update array
            // const id =2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            //2nd way using deleteResult helper fn
            return deleteResult(state, action);
    }

    return state;
};

export default reducer;