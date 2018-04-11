import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Text } from 'react-form';

import * as actionCreators from '../actions/actionCreators';
import history from '../history';
import store from '../store';
import sampleRecipes from '../sample-recipes';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadSampleRecipe = this.loadSampleRecipe.bind(this);
    
    this.state = {};
  }

  handleSubmit(values) {
    const recipe = {
      ...values,
      code: String(new Date().getTime()),
      id: store.getState().recipes.length,
    }
    this.props.addRecipe(recipe);
    console.log(recipe);
    history.push('/');
  }

  loadSampleRecipe() {
    const randomIndex = Math.floor(Math.random() * sampleRecipes.length);
    const randomRecipe = sampleRecipes[randomIndex];

    const inputs = document.getElementsByTagName("input");
    document.getElementById("name").value = "chicken"
    document.getElementById("imageLink").value = "chicken"

    const ingredientInputs = document.getElementById("ingredients").getElementsByTagName("input");
    const directionInputs = document.getElementById("directions").getElementsByTagName("input");

    for (let i = 0; i < randomRecipe.ingredients.length; i++) {
      document.getElementById("ingredients").innerHTML += "<li><Text field={['ingredients', i]}/></li>";
    }

    // for (let i = 0; i < randomRecipe.ingredients.length; i++) {
    //   ingredientInputs[i].value = randomRecipe.ingredients[i];
    // }

    // for (let i = 0; i < randomRecipe.directions.length; i++) {
    //   document.getElementById("directions").innerHTML += '<li><input type="text"/></li>';
    // }

    // for (let i = 0; i < randomRecipe.directions.length; i++) {
    //   directionInputs[i].value = randomRecipe.directions[i];
    // }

    document.getElementById("cookTime").value = "2"
    document.getElementById("servings").value = "10"
    // console.log(inputs);
  }

  render() {
    return (
      <div className="add-recipe">
        <div className="add-recipe__header">
          <h1>Add Recipe</h1>
          <button onClick={this.loadSampleRecipe} className="button delete" type="button">Load a Random Recipe</button>
        </div>
        <Form onSubmit={values => this.handleSubmit(values)}>
          {formApi => (
            <form onSubmit={formApi.submitForm} className="form">
              <div className="control">
                <label className="control__label">Recipe Name</label>
                <Text field="name" id="name" />
              </div>
              <div className="control">
                <label className="control__label">Image Link</label>
                <Text field="imageLink" id="imageLink" />
              </div>
              <div className="control">
                <label className="control__label">Ingredients:</label>
                <ul className="" id="ingredients">
                  <li>
                    <Text field={['ingredients', 0]}/>
                  </li>
                  <li>
                    <Text field={['ingredients', 1]}/>
                  </li>
                  {formApi.values.ingredients && formApi.values.ingredients.map(function(ingredient, i) {
                    if(i === 0 || i === 1) {
                      return null;
                    } else {
                      return (
                        <li key={`ingredients${i}`}>
                          <Text field={['ingredients', i]} />
                          <button
                            onClick={() => formApi.removeValue('ingredients', i)}
                            type="button"
                            className="delete button">
                            <i className="fa fa-trash-alt icon"></i>
                          </button>
                        </li>
                      )
                    }
                  })}
                </ul>
                <ul>
                  <li onClick={() => formApi.addValue('ingredients', '')}
                      type="button"
                      className="add-item submit">+</li>
                </ul>
              </div>
              <div className="control">
                <label className="control__label">Directions:</label>
                <ul className="recipe__directions" id="directions">
                  <li>
                    <Text field={['directions', 0]}/>
                  </li>
                  <li>
                    <Text field={['directions', 1]}/>
                  </li>
                  {formApi.values.directions && formApi.values.directions.map(function(direction, i) {
                    if (i === 0 || i === 1) {
                      return null;
                    } else {
                      return (
                        <li key={`ingredients${i}`}>
                          <Text field={['ingredients', i]} />
                          <button
                            onClick={() => formApi.removeValue('ingredients', i)}
                            type="button"
                            className="delete button">
                            <i className="fa fa-trash-alt icon"></i>
                          </button>
                        </li>
                      )
                    }
                  })}
                </ul>
                <ul>
                  <li onClick={() => formApi.addValue('directions', '')}
                      type="button"
                      className="add-item submit">+</li>
                </ul>
              </div>
              <div className="control">
                <label className="control__label">Cook Time (minutes)</label>
                <Text field="cookTime" type="number" id="cookTime" />
              </div>
              <div className="control">
                <label className="control__label">Number of Servings</label>
                <Text field="servings" type="number" id="servings"/>
              </div>
              <div className="right">
                {/* <button onClick={this.clearForm} className="button warning" type="button">Clear</button> */}
                <button type="submit" className="button submit">Submit</button>
              </div>
            </form>
          )}
        </Form>
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

const NewRecipe = connect(mapStateToProps, mapDispatchToProps)(RecipeForm);

export default NewRecipe;