import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider, connect } from 'react-redux';

// import store from './store';

import App from './components/App';
// import Single from './components/Single';

// const router = (
//   <Provider store={store}>
//     <BrowserRouter>
//       <div>
//         <Header/>
//         <Route exact path="/" component={RecipeGrid}></Route>
//         <Route path="/recipe/:id" component={App}></Route>
//       </div>
//     </BrowserRouter>
//   </Provider>
// );

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
