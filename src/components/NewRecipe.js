import React, { Component } from 'react';
import { Form, Text } from 'react-form';

class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-recipe">
        <div className="add-recipe__header">
          <h1>Add Recipe</h1>
          {/* <button onClick={this.loadSampleRecipe} className="button delete" type="button">Load a Random Recipe</button> */}
        </div>
        <Form onSubmit={recipe => this.setState({ recipe })}>
          {formApi => (
            <form onSubmit={formApi.submitForm} className="form">
              <div className="control">
                <label className="control__label">Recipe Name</label>
                <Text field="name" />
              </div>
              <div className="control">
                <label className="control__label">Image Link</label>
                <Text field="image" />
              </div>
              <div className="control">
                <label className="control__label">Ingredients:</label>
                <ul className="" ref="ingredients">
                  <li>
                    <Text field={['ingredients', 0]}/>
                  </li>
                  <li>
                    <Text field={['ingredients', 1]}/>
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
                    <Text field={['directions', 0]} />
                  </li>
                  <li>
                    <Text field={['directions', 1]} />
                  </li>
                </ul>
                <ul>
                  <li className="add-item submit" onClick={this.addDirection}>+</li>
                </ul>
              </div>
              <div className="control">
                <label className="control__label">Cook Time (minutes)</label>
                <Text field="cookTime" type="number"/>
              </div>
              <div className="control">
                <label className="control__label">Number of Servings</label>
                <Text field="servings" type="number"/>
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

export default NewRecipe;