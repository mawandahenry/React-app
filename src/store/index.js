import React from 'react';
import {compose, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/';

const store =createStore(RootReducer,compose(applyMiddleware(thunk),
window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;
