export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE',
    recipe
  }
}

export function deleteRecipe(index) {
  return {
    type: 'DELETE_RECIPE',
    index
  }
}