import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import '../style/App.scss';
import RecipeGrid from './RecipeGrid';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
// import NewRecipe from './NewRecipe';

class Main extends Component {
  render() {
    return (
      <Switch>
        <div className="section">
          <div className="container">
            <Route exact path='/' component={RecipeGrid} />
            <Route path='/recipe/:code' component={Recipe} />
            <Route path='/add-recipe' component={AddRecipe} />
          </div>
        </div>
      </Switch>
    )
  }
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

const App = connect(mapStateToProps)(Main);

export default App;