import React, { Component } from 'react';

class AddRecipe extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const recipe = {
      name: this.refs.name.value,
      imageLink: this.refs.imageLink.value,
      ingredients: this.refs.ingredients.value,
      directions: this.refs.directions.value,
      cookTime: this.refs.cookTime.value,
      servings: this.refs.servings.value,
    }
    this.refs.commentForm.reset();
    console.log(recipe);
  }
  
  render() {
    return (
      <div>
        <h1>Add Recipe</h1>
        <form ref="commentForm" onSubmit={this.handleSubmit}>
          <div className="control">
            <label className="label">Recipe Name</label>
            <input type="text" ref="name"/>
          </div>
          <div className="control">
            <label className="label">Image Link</label>
            <input type="text" ref="imageLink"/>
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
            <input type="number" ref="cookTime"/>
          </div>
          <div className="control">
            <label className="label">Numer of Servings</label>
            <input type="number" ref="servings"/>
          </div>
          <input type="submit" className="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default AddRecipe;
