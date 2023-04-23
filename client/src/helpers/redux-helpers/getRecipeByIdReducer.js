export const getRecipeByIdReducer = (state, action) => {
  return {
    ...state,
    recipeInfo: { ...action.payload },
  };
};
