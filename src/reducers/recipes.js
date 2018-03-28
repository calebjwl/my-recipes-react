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

export default recipes;