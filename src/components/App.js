import { connect } from 'react-redux';
import Main from './Main';

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

const App = connect(mapStateToProps)(Main);

export default App;