import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  render() {
    const recipe = store.getState().recipes.find(r => r.code === this.props.match.params.code);
    if (!recipe) {
      return <div>Sorry, but the recipe was not found.</div>;
    }
    return (
      <div className="recipe" key={recipe.id}>
        <Link to={`/recipe/${recipe.code}`}>
          <img src={recipe.image} alt={recipe.name} className="recipe__image"/>
        </Link>
        <p>{recipe.name}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.directions}</p>
        <p>Cook time: {recipe.cookTime}</p>
        <p>Servings: {recipe.servings}</p>
        <button className="delete" onClick={this.delete.bind(null, recipe.id)}>Delete Recipe</button>
        {/* <button className="delete" onClick={this.props.deleteRecipe.bind(null, recipe.id)}>Delete Recipe</button> */}
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
