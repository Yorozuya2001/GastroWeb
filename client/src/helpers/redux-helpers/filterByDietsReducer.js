export const filterByDietsReducer = (state, action) => {
  if (action.payload !== "allDiets") {
    return {
      ...state,
      recipes: [
        ...state.recipesFiltered.filter((recipe) =>
          recipe.diets.includes(action.payload)
        ),
      ],
    };
  } else {
    return {
      ...state,
      recipes: [...state.recipesFiltered],
    };
  }
};
