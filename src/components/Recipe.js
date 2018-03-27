import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RecipeAPI from '../api';

class Recipe extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const recipe = RecipeAPI.get(parseInt(this.props.match.params.id, 10));
    if (!recipe) {
      return <div>Sorry, but the recipe was not found.</div>;
    }
    return (
      <div className="recipe">
        <Link to={`/recipe/${recipe.id}`}>
          <img src={recipe.image} alt={recipe.name}/>
        </Link>
        <p>{recipe.name}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.directions}</p>
        <p>Cook time: {recipe.cookTime}</p>
        <p>Servings: {recipe.servings}</p>
      </div>
    );
  }
}

export default Recipe;
