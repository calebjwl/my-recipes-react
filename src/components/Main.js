import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/App.scss';

import RecipeGrid from './RecipeGrid';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={RecipeGrid}/>
        <Route path='/recipe/:code' component={Recipe}/>
        <Route path='/add-recipe' component={AddRecipe}/>
      </Switch>
    )
  };
}

export default Main;
