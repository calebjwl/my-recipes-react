import React, { Component } from 'react';
import '../style/App.scss';

import sampleRecipes from '../sample-recipes';

import Header from './Header';
import RecipeGrid from './RecipeGrid';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
