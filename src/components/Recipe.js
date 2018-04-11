import React, { Component } from 'react';
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
    const confirm = window.confirm("Are you sure you want to delete this recipe?");
    if(confirm) {
      this.props.deleteRecipe(recipeId);
      history.push('/');
    } else {
      return;
    }
  }

  // edit(recipeId) {
  //   history.push('/edit/:id');
  //   const recipe = {
  //     code: String(new Date().getTime()),
  //     id: store.getState().recipes.length,
  //     name: this.refs.name.value,
  //     imageLink: this.refs.imageLink.value,
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
        <img src={recipe.imageLink} alt={recipe.name} className="recipe__image"/>
        <div className="recipe__info">
          <div className="recipe__header">
            <p className="recipe-card__name recipe__name">{recipe.name}</p>
            <div>
              {/* <button className="warning button">Edit</button> */}
              <button className="delete button" onClick={this.delete.bind(null, recipe.id)}>
                <i className="fa fa-trash-alt icon"></i>
              </button>
            </div>
          </div>
          <div className="recipe-card__list">
            <i className="far fa-clock icon"></i>
            <p className="recipe-card__list-item">{recipe.cookTime} mins</p>
            <i className="fas fa-chart-pie icon"></i>
            <p className="recipe-card__list-item">{recipe.servings} servings</p>
          </div>
          <p>Ingredients:</p>
          <ul className="recipe__ingredients">
            {recipe.ingredients.map((ingredient) => 
              <li>{ingredient}</li>
            )}
          </ul>
          <p>Directions:</p>
          <ul className="recipe__directions">
            {recipe.directions.map((direction) => 
              <li>{direction}</li>
            )}
          </ul>
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
