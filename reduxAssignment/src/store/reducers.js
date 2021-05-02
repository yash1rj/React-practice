import * as actionTypes from '../store/actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.PERSON_ADDED) {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        };

        return {
            ...state,
            persons: state.persons.concat(newPerson)
        };
    }

    if(action.type === actionTypes.PERSON_REMOVED) {
        return {
            ...state,
            persons: state.persons.filter(person => person.id !== action.personId)
        };
    }
    return state;
}

export default reducer;