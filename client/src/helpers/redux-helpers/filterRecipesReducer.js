export const filterRecipesReducer = (state, action) => {
  let recipesFilteredById = state.recipesFiltered.filter(
    (recipe) => typeof recipe.id !== "number"
  );

  if (action.payload === "all") {
    return {
      ...state,
      recipes: state.allRecipes[0]
        ? [...state.allRecipes]
        : "not found Recipes",
      recipesFiltered: [...state.allRecipes],
    };
  }
  if (action.payload === "db-recipes") {
    return {
      ...state,
      recipes: recipesFilteredById[0]
        ? [...recipesFilteredById]
        : "Recipes not found in DB",
      recipesFiltered: [...recipesFilteredById],
    };
  }
};
