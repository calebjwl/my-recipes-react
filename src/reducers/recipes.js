// reducer takes in two things:
// copy of current state
// action

function recipes(state=[], action) {
  switch(action.type) {
    case 'ADD_RECIPE': 
      console.log('addrecipe');
      break;
    case 'DELETE_RECIPE':
      console.log('deleterecipe');
      break;
    default:
      return state;
  }
}

export default recipes;