import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import browserHistory from './history';
import rootReducer from './reducers/index';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveState(store.getState());
});

export const history = syncHistoryWithStore(browserHistory, store);

export default store;