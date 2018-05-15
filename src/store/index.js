import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import idGen from '../middlewares/idGen';

const enhancer = applyMiddleware(logger, idGen);
const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;