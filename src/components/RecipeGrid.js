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
      <div className="grid">
        {this.state.recipes.map((recipe) => 
          <div className="grid__item">
            <Link to={`/recipe/${recipe.code}`} key={recipe.id}>
              <div className="recipe-card">
                <img src={recipe.image} alt={recipe.name} className="recipe-card__image"/>
                <p className="recipe-card__name">{recipe.name}</p>
                <div className="recipe-card__list">
                  <i className="far fa-clock icon"></i>
                  <p className="recipe-card__list-item">{recipe.cookTime} mins</p>
                  <i className="fas fa-chart-pie icon"></i>
                  <p className="recipe-card__list-item">{recipe.servings} servings</p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default RecipeGrid;
