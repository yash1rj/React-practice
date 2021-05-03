import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.counterVal })
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