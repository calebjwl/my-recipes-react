import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
      </div>
    );
  }
}

export default Header;
