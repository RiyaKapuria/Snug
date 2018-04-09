import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import chatReducer from './reducers/chat_reducer';

export default createStore (
    combineReducers ({
        chatReducer
    }),
    {},
    applyMiddleware(logger, thunk, promise())
);
