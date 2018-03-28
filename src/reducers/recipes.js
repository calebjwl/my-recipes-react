// reducer takes in two things:
// copy of current state
// action

function recipes(state=[], action) {
  switch(action.type) {
    case 'ADD_RECIPE': 
      console.log(state);
      return [...state, action.recipe]; 
    case 'DELETE_RECIPE':
      console.log('deleterecipe');
      break;
    default:
      return state;
  }
}

// function recipes(state=[], action) {
  // const code = action.recipe.code;
  // console.log(action.recipe);
  // if(typeof code !== 'undefined') {
  //   return {
  //     ...state,
  //     [code]: postRecipes(state[code], action)
  //   }
  // }
//   return state;
// }

export default recipes;