export const orderRecipesReducer = (state, action) => {
  if (!Array.isArray(state.recipes))
    return {
      ...state,
      recipes: "Cant not order because there aren't recipes",
    };

  if (action.payload === "a-z") {
    return {
      ...state,
      recipes: [...state.recipes].sort((a, b) =>
        a.title.localeCompare(b.title)
      ),
      allRecipes: [...state.allRecipes].sort((a, b) =>
        a.title.localeCompare(b.title)
      ),
      recipesFiltered: [...state.recipesFiltered].sort((a, b) =>
        a.title.localeCompare(b.title)
      ),
    };
  }

  if (action.payload === "z-a") {
    return {
      ...state,
      recipes: [...state.recipes].sort((a, b) =>
        b.title.localeCompare(a.title)
      ),
      allRecipes: [...state.allRecipes].sort((a, b) =>
        b.title.localeCompare(a.title)
      ),
      recipesFiltered: [...state.recipesFiltered].sort((a, b) =>
        b.title.localeCompare(a.title)
      ),
    };
  }

  if (action.payload === "lowest-hs-first") {
    return {
      ...state,
      recipes: [...state.recipes].sort((a, b) => a.healthScore - b.healthScore),
      allRecipes: [...state.allRecipes].sort(
        (a, b) => a.healthScore - b.healthScore
      ),
      recipesFiltered: [...state.recipesFiltered].sort(
        (a, b) => a.healthScore - b.healthScore
      ),
    };
  }

  if (action.payload === "highest-hs-first") {
    return {
      ...state,
      recipes: [...state.recipes].sort((a, b) => b.healthScore - a.healthScore),
      allRecipes: [...state.allRecipes].sort(
        (a, b) => b.healthScore - a.healthScore
      ),
      recipesFiltered: [...state.recipesFiltered].sort(
        (a, b) => b.healthScore - a.healthScore
      ),
    };
  }
};
