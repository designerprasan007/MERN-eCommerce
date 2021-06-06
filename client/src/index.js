import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';

import {createStore,  applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';

import App from './App';

import reducers from './reducers';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const UserinfoStorage = localStorage.getItem('Userinfo') ? JSON.parse(localStorage.getItem('Userinfo')) : null

const InitialState = {
  AuthReducer : {userdata: UserinfoStorage}
};

const middleware = [thunk];

const Store = createStore(reducers, InitialState, composeWithDevTools(applyMiddleware(...middleware)));


ReactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.querySelector('#root')  
  )