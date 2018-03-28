import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RecipeAPI from '../api';
import store from '../store';

class Recipe extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  deleteRecipe(recipe) {

  }

  render() {
    const recipe = store.getState().recipes.find(r => r.code === this.props.match.params.code);
    // const recipe = RecipeAPI.get(this.props.match.params.code);
    if (!recipe) {
      return <div>Sorry, but the recipe was not found.</div>;
    }
    return (
      <div className="recipe">
        <Link to={`/recipe/${recipe.code}`}>
          <img src={recipe.image} alt={recipe.name} className="recipe__image"/>
        </Link>
        <p>{recipe.name}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.directions}</p>
        <p>Cook time: {recipe.cookTime}</p>
        <p>Servings: {recipe.servings}</p>
        <button className="delete">Delete Recipe</button>
      </div>
    );
  }
}

export default Recipe;
