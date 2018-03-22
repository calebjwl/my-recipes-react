import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Recipe from './Recipe';

class Single extends Component {
  render() {
    return (
      <div className="single">
        <Link to="/">Back</Link>
        <Recipe/>
      </div>
    );
  }
}

export default Single;
