import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import browserHistory from './history';
import rootReducer from './reducers/index';
import RecipeAPI from './api';
import { loadState, saveState } from './localStorage';

// const defaultState = { recipes: [...RecipeAPI.all()]};
const persistedState = loadState();

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveState(store.getState());
});

export const history = syncHistoryWithStore(browserHistory, store);

// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;