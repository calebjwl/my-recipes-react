import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeGrid extends Component {
  // constructor() {
  //   super();
  //   this.renderRecipes = this.renderRecipes.bind(this);
  // }

  render() {
    return (
      <div>
        <h1>Grid</h1>
        <div className="grid">
          {this.props.recipes.map((recipe, index) => 
            <Recipe {...recipe} key={index}/>
          )}
        </div>
      </div>
    );
  }
}

export default RecipeGrid;
