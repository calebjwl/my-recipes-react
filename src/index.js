import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import RecipeGrid from './components/RecipeGrid';
import Single from './components/Single';

const router = (
  <Router>
    <div>
      <Route path="/" component={App}></Route>
      <Route path="/view/:code" component={Single}></Route>
      <Route exact path="/" component={RecipeGrid}></Route>
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
