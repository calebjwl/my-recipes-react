import React, { Component } from 'react';
// import Recipe from './Recipe';

// import sampleRecipes from '../sample-recipes';

class RecipeGrid extends Component {
  // constructor() {
  //   super();
  //   this.loadSamples = this.loadSamples.bind(this);

  //   this.state = {
  //     recipes: [...sampleRecipes]
  //   }
  // }

  // loadSamples() {
  //   this.setState({
  //     recipes: [...sampleRecipes]
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Grid</h1>
        <div className="grid">
          {/* {this.state.recipes.map((recipe, index) => 
            <Recipe {...recipe} key={index} index={index}/>
          )} */}
        </div>
      </div>
    );
  }
}

export default RecipeGrid;
