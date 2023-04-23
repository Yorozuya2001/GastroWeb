export const clearDetailReducer = (state, action) => {
  return {
    ...state,
    recipeInfo: {},
  };
};
