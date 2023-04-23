export const filterRecipesReducer = (state, action) => {
  if (action.payload === "all") {
    return {
      ...state,
      recipes: [...state.allRecipes],
    };
  }
  if (action.payload === "db-recipes") {
    return {
      ...state,
      recipes: [
        ...state.allRecipes.filter((recipe) => typeof recipe.id !== "number"),
      ],
    };
  }

  if (action.payload !== "allDiets") {
    return {
      ...state,
      recipes: [
        ...state.allRecipes.filter((recipe) =>
          recipe.diets.includes(action.payload)
        ),
      ],
    };
  }
};
