import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeGrid from './RecipeGrid';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

const Main = () => (
  <Switch>
    <Route exact path='/' component={RecipeGrid}/>
    <Route path='/recipe/:code' component={Recipe}/>
    <Route path='/add-recipe' component={AddRecipe}/>
  </Switch>
);

export default Main;
