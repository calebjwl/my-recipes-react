import React, { Component } from 'react';
import '../style/App.scss';

import Header from './Header';
import RecipeGrid from './RecipeGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
