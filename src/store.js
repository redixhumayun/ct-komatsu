import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './Reducers';

const client = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    responseType: 'json'
});

function configureStore(initialState = {}) {
    const enhancer = applyMiddleware(
        logger,
        axiosMiddleware(client)
    );
    return createStore(reducer, initialState, enhancer);
};

const store = configureStore();
export default store;