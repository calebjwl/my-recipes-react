import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
  render() {
    const recipe = this.props;
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
