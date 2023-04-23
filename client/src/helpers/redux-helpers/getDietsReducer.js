export const getDietsReducer = (state, action) => {
  return {
    ...state,
    diets: [...action.payload],
  };
};
