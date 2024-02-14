// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.hydrate(

  // grace au provider le store est accessible partout 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
