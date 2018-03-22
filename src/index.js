import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './store';

import Main from './components/Main';
import RecipeGrid from './components/RecipeGrid';
import Single from './components/Single';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={Main}></Route>
        <Route path="/view/:code" component={Single}></Route>
        <Route exact path="/" component={RecipeGrid}></Route>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
