// add recipe
export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE',
    recipe
  }
}

// remove recipe 
export function deleteRecipe(index) {
  return {
    type: 'DELETE_RECIPE',
    index
  }
}