import React from 'react';

import Header from './Header';
import RecipeGrid from './RecipeGrid';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <RecipeGrid/>
      </div>
    )
  }
}

export default App;