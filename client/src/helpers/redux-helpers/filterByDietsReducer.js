export const filterByDietsReducer = (state, action) => {
  if (action.payload !== "allDiets") {
    let recipesFiltered = state.recipesFiltered.filter((recipe) =>
      recipe.diets.includes(action.payload)
    );
    return {
      ...state,
      recipes: recipesFiltered[0]
        ? [...recipesFiltered]
        : "Not Found Recipes with diet",
    };
  } else {
    return {
      ...state,
      recipes: state.recipesFiltered[0]
        ? [...state.recipesFiltered]
        : "not found recipes",
    };
  }
};
