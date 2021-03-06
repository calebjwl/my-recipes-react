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
        <div className="container">
          <Route exact path='/' component={RecipeGrid}/>
          <Route path='/recipe/:code' component={Recipe}/>
          <Route path='/add-recipe' component={AddRecipe}/>
        </div>
      </Switch>
    )
  }
};

export default Main;
