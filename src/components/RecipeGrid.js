import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

class RecipeGrid extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [...store.getState().recipes]
    }
  }

  render() {
    if(this.state.recipes.length === 0) {
      return (
        <div>Add a <Link to="/add-recipe">new recipe</Link> homie</div>
      )
    }
    return (
      <div>
        <h1>Grid</h1>
        <div className="grid">
          {this.state.recipes.map((recipe) => 
            <Link to={`/recipe/${recipe.code}`} key={recipe.id}>
              <p>{recipe.name}</p>
              <img src={recipe.image} alt={recipe.name} className="recipe__image"/>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default RecipeGrid;
