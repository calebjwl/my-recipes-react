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
      <div className="container">
        <div className="grid">
          {this.state.recipes.map((recipe) => 
            <div className="grid__item">
              <Link to={`/recipe/${recipe.code}`} key={recipe.id}>
                <div className="recipe-card">
                  <p className="recipe-card__title">{recipe.name}</p>
                  <img src={recipe.image} alt={recipe.name} className="recipe-card__image"/>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RecipeGrid;
