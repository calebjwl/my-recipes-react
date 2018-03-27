import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RecipeAPI from '../api';

class RecipeGrid extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [...RecipeAPI.all()]
    }
  }

  render() {
    return (
      <div>
        <h1>Grid</h1>
        <div className="grid">
          {this.state.recipes.map((recipe) => 
            // <Recipe {...recipe} key={recipe.id}/>
            <Link to={`/recipe/${recipe.code}`} key={recipe.id}>
              <p>{recipe.name}</p>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default RecipeGrid;
