import {combineReducers, createStore} from 'redux';
import {OTTReducer} from './reducer/OTTReducer';

const rootReducer = combineReducers({
    OTTReducer:OTTReducer,

});

export const store = createStore(rootReducer);