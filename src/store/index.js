import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initialState';
import rootReducer from './reducer';

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
