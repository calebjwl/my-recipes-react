import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import validator from 'validator';

import * as actionCreators from '../actions/actionCreators';
import history from '../history';
import store from '../store';
import sampleRecipes from '../sample-recipes';

class RecipeForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.loadSampleRecipe = this.loadSampleRecipe.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.addDirection = this.addDirection.bind(this);
  }

  validateForm() {
    const inputs = this.refs.recipeForm.querySelectorAll('input');
    const emptyInputs = [];
    for (let i = 0; i < inputs.length; i++) {
      if(validator.isEmpty(inputs[i].value)) {
        emptyInputs.push(inputs[i]);
      }
    }
    if (emptyInputs.length === 0) {
      return true;
    } else {
      return 'Please fill out all fields to continue.'
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.validateForm() === true) {
      const ingredientInputs = this.refs.ingredients.getElementsByTagName("input");
      const directionInputs = this.refs.directions.getElementsByTagName("input");
      const ingredients = [];
      const directions = [];
      for(let i = 0; i < ingredientInputs.length; i ++) {
        ingredients.push(ingredientInputs[i].value);
      }
      for(let i = 0; i < directionInputs.length; i ++) {
        directions.push(directionInputs[i].value);
      }
  
      const recipe = {
        code: String(new Date().getTime()),
        id: store.getState().recipes.length,
        name: this.refs.name.value,
        image: this.refs.image.value,
        ingredients: ingredients,
        directions: directions,
        cookTime: this.refs.cookTime.value,
        servings: this.refs.servings.value,
      }
      this.refs.recipeForm.reset();
      this.props.addRecipe(recipe);
      history.push('/');
    } else {
      alert(this.validateForm());
    }
  }

  clearForm() {
    this.refs.recipeForm.reset();
    this.refs.ingredients.innerHTML = '<li><input type="text"/></li><li><input type="text"/></li>';
    this.refs.directions.innerHTML = '<li><input type="text"/></li><li><input type="text"/></li>';
  }

  loadSampleRecipe() {
    const randomIndex = Math.floor(Math.random() * sampleRecipes.length);
    const randomRecipe = sampleRecipes[randomIndex];
  
    const ingredientInputs = this.refs.ingredients.getElementsByTagName("input");
    const directionInputs = this.refs.directions.getElementsByTagName("input");

    this.refs.ingredients.innerHTML = '';
    this.refs.directions.innerHTML = '';
    
    for(let i = 0; i < randomRecipe.ingredients.length; i++) {
      this.refs.ingredients.innerHTML += '<li><input type="text"/></li>';
    }
    
    for(let i = 0; i < randomRecipe.ingredients.length; i++) {
      ingredientInputs[i].value = randomRecipe.ingredients[i];
    }
    
    for(let i = 0; i < randomRecipe.directions.length; i++) {
      this.refs.directions.innerHTML += '<li><input type="text"/></li>';
    }
    
    for(let i = 0; i < randomRecipe.directions.length; i++) {
      directionInputs[i].value = randomRecipe.directions[i];
    }

    this.refs.name.value = randomRecipe.name;
    this.refs.image.value = randomRecipe.image;
    this.refs.cookTime.value = randomRecipe.cookTime;
    this.refs.servings.value = randomRecipe.servings;
  }

  addIngredient() {
    const newList = document.createElement('li');
    newList.innerHTML= '<input type="text"/>';
    this.refs.ingredients.appendChild(newList);
  }

  addDirection() {
    const newList = document.createElement('li');
    newList.innerHTML = '<input type="text"/>';
    this.refs.directions.appendChild(newList);
  }

  render() {
    return (
      <div className="add-recipe">
        <div className="add-recipe__header">
          <h1>Add Recipe</h1>
          <button onClick={this.loadSampleRecipe} className="button delete" type="button">Load a Random Recipe</button>
        </div>
        <form ref="recipeForm" onSubmit={this.handleSubmit} className="form">
          <div className="control">
            <label className="control__label">Recipe Name</label>
            <input type="text" ref="name"/>
          </div>
          <div className="control">
            <label className="control__label">Image Link</label>
            <input type="text" ref="image"/>
          </div>
          <div className="control">
            <label className="control__label">Ingredients:</label>
            <ul className="" ref="ingredients">
              <li>
                <input type="text"/>
              </li>
              <li>
                <input type="text"/>
              </li>
            </ul>
            <ul>
              <li className="add-item submit" onClick={this.addIngredient}>+</li>
            </ul>
          </div>
          <div className="control">
            <label className="control__label">Directions:</label>
            <ul className="recipe__directions" ref="directions">
              <li>
                <input type="text"/>
              </li>
              <li>
                <input type="text"/>
              </li>
            </ul>
            <ul>
              <li className="add-item submit" onClick={this.addDirection}>+</li>
            </ul>
          </div>
          <div className="control">
            <label className="control__label">Cook Time (minutes)</label>
            <input type="number" ref="cookTime"/>
          </div>
          <div className="control">
            <label className="control__label">Number of Servings</label>
            <input type="number" ref="servings"/>
          </div>
          <div className="right">
            <button onClick={this.clearForm} className="button warning" type="button">Clear</button>
            <button className="button submit">Submit</button>
          </div>
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