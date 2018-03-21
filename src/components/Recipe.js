import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    const recipe = this.props;
    return (
      <div className="recipe">
        <img src={recipe.image} alt={recipe.name}/>
        <p>{recipe.name}</p>
        <p>{recipe.image}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.directions}</p>
        <p>{recipe.cookTime}</p>
        <p>{recipe.servings}</p>
      </div>
    );
  }
}

export default Recipe;
