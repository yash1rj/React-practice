import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from '../src/store/reducers/counter';
import resultsReducer from '../src/store/reducers/results';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

const store = createStore(rootReducer);

// provider is a helper component which allows us to kind of inject our store to react components
// wrap the App component with Provider
// hook up provider component with store by setting up store property
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
