import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import idGen from '../middlewares/idGen';
import api from '../middlewares/api';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, idGen, api/*, logger*/);
const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;