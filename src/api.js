const RecipeAPI = {
  recipes: [
    {
      code: 'honey-garlic',
      id: 0,
      name: 'Honey Garlic Salmon',
      image: 'https://www.recipetineats.com/wp-content/uploads/2015/03/Honey-Garlic-Salmon-1.jpg',
      ingredients: 'Sauce: \n- 4 tbsp honey\n- 2 tbsp soy sauce (all purpose or light soy sauce)\n- 1 tbsp white vinegar (or sub with any other vinegar except balsamic)\n- 1 large garlic clove (or 2 small) minced\n\nSalmon:\n- 2 salmon or trout fillets, skinless (6oz / 200g each)\n- Olive oil\n-  Salt and pepper\n-  Optional Garnishes\n-  Sesame seeds\n-  Finely sliced chives or shallots/scallions',
      directions: '1. Take salmon out of the fridge 20 minutes before cooking. Pat salmon skin dry with a paper towel and sprinkle with salt and pepper.\n2. Whisk together the Sauce ingredients in a small bowl.\n3. Drizzle oil in a non stick fry pan and heat over medium high heat (or just under, if your stove runs hot). Place salmon in the pan, and cook the first side for 3 minutes. Turn, then cook the other side for 2 minutes, or to taste.\n4. Pour Sauce over salmon. Cook for 1 minute or until it starts to thicken slightly. Check the side of the salmon to tell how cooked through the middle is - I like mine rare inside. (Note 1). If Sauce thickens too much before your salmon is cooked to your taste, just add water 1 tbsp at a time.\n5. Remove onto serving plates. 6. Serve salmon drizzled with Sauce, sprinkled with sesame seeds and chives/shallots, if desired.',
      cookTime: 15,
      servings: 2
    },
    {
      code: 'avocado-toast',
      id: 1,
      name: 'Avocado Toast',
      image: 'https://truffle-assets.imgix.net/9f7fc1b6-101-avocadotoast-dishland1.jpg',
      ingredients: '1 slice whole wheat bread \n 1 avocado \n 2 tsp cream cheese \n salt and pepper to taste \n red pepper flakes to taste \n 1 egg (optional)',
      directions: '1. Toast slice of bread. While waiting, slice avocado in half vertically and remove pit. Once toast is finished, spread cream cheese and score avocado halves vertically. Spread avocado on top of cream cheese and season with salt, pepper, and red pepper flakes to taste.',
      cookTime: 5,
      servings: 1
    }
  ],
  all: function() { return this.recipes },
  get: function(code) {
    const isRecipe = r => r.code === code;
    return this.recipes.find(isRecipe);
  }
};

export default RecipeAPI;
