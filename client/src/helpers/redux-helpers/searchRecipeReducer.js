export const searchRecipesReducer = (state, action) => {
  return {
    ...state,
    recipes: [...action.payload],
    allRecipes: [...action.payload],
    recipesFiltered: [...action.payload],
  };
};
