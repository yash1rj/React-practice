import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const addFive = () => {
    return {
        type: actionTypes.ADDFIVE,
        value: 5
    }
};

export const subtractFive = () => {
    return {
        type: actionTypes.SUBTRACTFIVE,
        value: 5
    }
};