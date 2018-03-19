import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default App;
