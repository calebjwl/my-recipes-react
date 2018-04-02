import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import sampleRecipes from '../sample-recipes'
import history from '../history'
import store from '../store'

class RecipeForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadSampleRecipe = this.loadSampleRecipe.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const recipe = {
      code: String(new Date().getTime()),
      id: store.getState().recipes.length,
      name: this.refs.name.value,
      image: this.refs.image.value,
      ingredients: this.refs.ingredients.value,
      directions: this.refs.directions.value,
      cookTime: this.refs.cookTime.value,
      servings: this.refs.servings.value,
    }
    this.refs.commentForm.reset();
    this.props.addRecipe(recipe);
    history.push('/');
  }

  loadSampleRecipe() {
    const randomIndex = Math.floor(Math.random() * sampleRecipes.length);
    const randomRecipe = sampleRecipes[randomIndex];
    this.refs.name.value = randomRecipe.name;
    this.refs.image.value = randomRecipe.image;
    this.refs.ingredients.value = randomRecipe.ingredients;
    this.refs.directions.value = randomRecipe.directions;
    this.refs.cookTime.value = randomRecipe.cookTime;
    this.refs.servings.value = randomRecipe.servings;
  }

  render() {
    return (
      <div>
        <h1>Add Recipe</h1>
        <button onClick={this.loadSampleRecipe}>Load Sample</button>
        <form ref="commentForm" onSubmit={this.handleSubmit}>
          <div className="control">
            <label className="label">Recipe Name</label>
            <input type="text" ref="name" />
          </div>
          <div className="control">
            <label className="label">Image Link</label>
            <input type="text" ref="image" />
          </div>
          <div className="control">
            <label className="label">Ingredients</label>
            <textarea cols="30" rows="10" ref="ingredients"></textarea>
          </div>
          <div className="control">
            <label className="label">Directions</label>
            <textarea cols="30" rows="10" ref="directions"></textarea>
          </div>
          <div className="control">
            <label className="label">Cook Time</label>
            <input type="number" ref="cookTime" />
          </div>
          <div className="control">
            <label className="label">Number of Servings</label>
            <input type="number" ref="servings" />
          </div>
          <input type="submit" className="submit" value="submit" />
        </form>
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

const AddRecipe = connect(mapStateToProps, mapDispatchToProps)(RecipeForm);

export default AddRecipe;