import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/Header';
import App from './components/App';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/" component={App}></Route>
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
