import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import store from '../store';
import history from '../history';

class Single extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.delete = this.delete.bind(this);
  }

  delete(recipeId) {
    this.props.deleteRecipe(recipeId);
    history.push('/');
  }

  // edit(recipeId) {
  //   history.push('/edit/:id');
  //   const recipe = {
  //     code: String(new Date().getTime()),
  //     id: store.getState().recipes.length,
  //     name: this.refs.name.value,
  //     image: this.refs.image.value,
  //     ingredients: this.refs.ingredients.value,
  //     directions: this.refs.directions.value,
  //     cookTime: this.refs.cookTime.value,
  //     servings: this.refs.servings.value,
  //   }
  //   this.props.editRecipe(recipeId);
  // }

  render() {
    const recipe = store.getState().recipes.find(r => r.code === this.props.match.params.code);
    if (!recipe) {
      return <div>Sorry, but the recipe was not found.</div>;
    }
    return (
      <div className="recipe recipe-card">
        <img src={recipe.image} alt={recipe.name} className="recipe__image"/>
        <div className="recipe__info">
          <p className="recipe-card__name recipe__name">{recipe.name}</p>
          <div className="recipe-card__list">
            <i className="far fa-clock icon"></i>
            <p className="recipe-card__list-item">{recipe.cookTime} mins</p>
            <i className="fas fa-chart-pie icon"></i>
            <p className="recipe-card__list-item">{recipe.servings} servings</p>
          </div>
          <ul className="recipe__ingredients">
            {recipe.ingredients.map((ingredient) => 
              <li>{ingredient}</li>
            )}
          </ul>
          <ul className="recipe__directions">
            {recipe.directions.map((direction) => 
              <li>{direction}</li>
            )}
          </ul>
          <button className="edit button">Edit</button>
          <button className="delete button" onClick={this.delete.bind(null, recipe.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Recipe = connect(mapStateToProps, mapDispatchToProps)(Single);

export default Recipe;
