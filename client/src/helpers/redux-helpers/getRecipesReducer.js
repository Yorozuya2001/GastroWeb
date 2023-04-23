export const getRecipesReducer = (state, action) => {
  return {
    ...state,
    recipes: [...action.payload],
    allRecipes: [...action.payload],
  };
};
