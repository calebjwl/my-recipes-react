import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import history from './history';

import Navbar from './components/Navbar';
import App from './components/App';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Navbar/>
        <Route path="/" component={App}></Route>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
