import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import rootReducer from './root-reducer';

export default createStore(rootReducer, applyMiddleware(ReduxThunk, ReduxPromise));
