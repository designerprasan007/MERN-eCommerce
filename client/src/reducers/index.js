import {combineReducers} from 'redux';

import {AuthReducer} from './adminReducer'
import {StoreReducer} from './StoreReducer';
import {PageData} from './PageDataReducer';
export default combineReducers({AuthReducer, StoreReducer, PageData}); 
