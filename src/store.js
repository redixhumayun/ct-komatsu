import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer from './Reducers';

function configureStore(initialState = {}) {
    const enhancer = applyMiddleware(logger);
    return createStore(reducer, initialState, enhancer);
};

const store = configureStore();
export default store;