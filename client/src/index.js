import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import allReducers from './reducers';

// const middleware = applyMiddleware(promise, thunk, logger);
const store = createStore(allReducers);

store.subscribe( () => console.log('store changed', store.getState() ) );

export default store;