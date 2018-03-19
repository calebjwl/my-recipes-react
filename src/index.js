import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import RecipeGrid from './components/RecipeGrid';

const router = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/" component={RecipeGrid}></Route>
    </div>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
