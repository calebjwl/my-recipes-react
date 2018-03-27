import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/Header';
import Main from './components/Main';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header/>
        <Main/>
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
