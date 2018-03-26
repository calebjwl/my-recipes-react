import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Recipe from './Recipe';

import sampleRecipes from '../sample-recipes';

class RecipeGrid extends Component {
  constructor() {
    super();
    // this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      recipes: [...sampleRecipes]
    }
  }

  // loadSamples() {
  //   this.setState({
  //     recipes: [...sampleRecipes]
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Grid</h1>
        <div className="grid">
          {this.state.recipes.map((recipe, i) => 
            // <Recipe {...recipe} key={recipe.id}/>
            <Link to={`/recipe/${recipe.id}`}>
              <p key={i}>{recipe.name}</p>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default RecipeGrid;
