import {combineReducers} from 'redux';

import {AuthReducer} from './adminReducer'
import {StoreReducer} from './StoreReducer';
export default combineReducers({AuthReducer, StoreReducer}); 
