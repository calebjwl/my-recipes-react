export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE',
    recipe
  }
}

export function deleteRecipe(id) {
  return {
    type: 'DELETE_RECIPE',
    id
  }
}