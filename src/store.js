import { createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import reducer from './Reducers';