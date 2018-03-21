import React, { Component } from 'react';

class RecipeGrid extends Component {
  constructor() {
    super();
    this.renderRecipes = this.renderRecipes.bind(this);
  }
  
  renderRecipes(key) {
    return (
      <h1>Hello!</h1>
    )
  }

  render() {
    return (
      <div className="recipe-grid">
        <h1>Grid</h1>
        {this.props.recipes.map(this.renderRecipes)}
      </div>
    );
  }
}

export default RecipeGrid;
