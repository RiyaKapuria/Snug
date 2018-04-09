import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import chatDetailsReducer from './reducers/chat_reducer';

export default createStore (
    combineReducers ({
        chatDetailsReducer
    }),
    {},
    applyMiddleware(logger, thunk, promise())
);
