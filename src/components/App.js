import React, { Component } from 'react';
import '../style/App.scss';

import sampleRecipes from '../sample-recipes';

import Header from './Header';
import RecipeGrid from './RecipeGrid';

class App extends Component {
  constructor() {
    super();
    // this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      recipes: [...sampleRecipes]
    }
  }

  // loadSamples() {
  //   this.setState({
  //     recipes: [...sampleRecipes]
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Header/>
        <RecipeGrid recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
