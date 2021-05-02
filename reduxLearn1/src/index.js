import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../src/store/reducer';

const store = createStore(reducer);

// provider is a helper component which allows us to kind of inject our store to react components
// wrap the App component with Provider
// hook up provider component with store by setting up store property
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
