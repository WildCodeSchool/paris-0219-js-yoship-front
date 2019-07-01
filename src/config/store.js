import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

const middleware = [
    logger
]
const store = createStore(reducers, applyMiddleware(...middleware)); 

export default store;