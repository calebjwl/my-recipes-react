import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Single extends Component {
  render() {
    return (
      <div className="single">
        <Link to="/">Back</Link>
        <h1>Single Recipe</h1>
      </div>
    );
  }
}

export default Single;
