import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeGrid from './RecipeGrid';
import Recipe from './Recipe';

const Main = () => (
  <Switch>
    <Route exact path='/' component={RecipeGrid}/>
    <Route path='/recipe/:code' component={Recipe}/>
  </Switch>
);

export default Main;
