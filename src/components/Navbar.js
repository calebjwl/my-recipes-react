import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar__content">
          <Link to="/" className="navbar__link -home">MyRecipes</Link>
          <Link to="/add-recipe" className="navbar__link">Add Recipe</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
