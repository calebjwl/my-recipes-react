import React, { Component } from 'react';

class AddRecipe extends Component {
  render() {
    return (
      <div>
        <h1>Add Recipe</h1>
        <form action="">
          <div className="control">
            <label className="label">Recipe Name</label>
            <input type="text"/>
          </div>
          <div className="control">
            <label className="label">Image Link</label>
            <input type="text"/>
          </div>
          <div className="control">
            <label className="label">Ingredients</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="control">
            <label className="label">Directions</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="control">
            <label className="label">Cook Time</label>
            <input type="text"/>
          </div>
          <div className="control">
            <label className="label">Numer of Servings</label>
            <input type="text"/>
          </div>
          <input type="submit" className="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default AddRecipe;
