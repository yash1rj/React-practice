export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDFIVE = 'ADDFIVE';
export const SUBTRACTFIVE = 'SUBTRACTFIVE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const addFive = () => {
    return {
        type: ADDFIVE,
        value: 5
    }
};

export const subtractFive = () => {
    return {
        type: SUBTRACTFIVE,
        value: 5
    }
};

export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        counterVal: result
    }
};

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        elId: id
    }
};