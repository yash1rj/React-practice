import { useCallback, useReducer } from 'react';

const initialState = { 
    loading: false, 
    error: null, 
    data: null,
    extra: null,
    identifier: null
};

const httpReducer = (currentHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: null, data: null, extra: null, identifier: action.identifier };
        case 'RESPONSE':
            return { ...currentHttpState, loading: false, data: action.responseData, extra: action.extra };
        case 'ERROR':
            return { loading: false, error: action.errData };
        case 'CLEAR_ERROR':
            return initialState;
        default:
            throw new Error('Should not reach here!');
    }
};

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState );

    const clear = useCallback(() => dispatchHttp({
        type: 'CLEAR_ERROR'
    }), []);

    const sendRequest = useCallback((url, method, body, extraReq, reqIdentifier) => {
        dispatchHttp({
            type: 'SEND',
            identifier: reqIdentifier
        });
        
        fetch(url, {
            method: method,
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(responseData => {
                dispatchHttp({
                    type: 'RESPONSE',
                    responseData: responseData,
                    extra: extraReq
                });
            })
            .catch(err => {
                dispatchHttp({
                    type: 'ERROR',
                    errData: "Something went wrong!!"
                });
            });
    }, []);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        extraReq: httpState.extra,
        reqIdentifier: httpState.identifier,
        clear: clear
    }; //can also return array
};

export default useHttp;