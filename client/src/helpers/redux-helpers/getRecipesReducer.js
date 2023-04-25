export const getRecipesReducer = (state, action) => {
  return {
    ...state,
    recipes: action.payload[0] ? [...action.payload] : "No recipes found",
    allRecipes: [...action.payload],
    recipesFiltered: [...action.payload],
  };
};
