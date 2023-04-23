export const filterRecipesReducer = (state, action) => {
  let recipesFilteredById = state.recipesFiltered.filter(
    (recipe) => typeof recipe.id !== "number"
  );

  if (action.payload === "all") {
    return {
      ...state,
      recipes: [...state.allRecipes],
      recipesFiltered: [...state.allRecipes],
    };
  }
  if (action.payload === "db-recipes") {
    return {
      ...state,
      recipes: [...recipesFilteredById],
      recipesFiltered: [...recipesFilteredById],
    };
  }
};
