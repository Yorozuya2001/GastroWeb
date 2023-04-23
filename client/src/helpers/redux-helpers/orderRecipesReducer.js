export const orderRecipesReducer = (state, action) => {
  if (action.payload === "a-z") {
    return {
      ...state,
      recipes: [...state.recipes].sort((a, b) =>
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
    };
  }

  if (action.payload === "lowest-hs-first") {
    return {
      ...state,
      recipes: [...state.recipes].sort((a, b) => a.healthScore - b.healthScore),
    };
  }

  if (action.payload === "highest-hs-first") {
    return {
      ...state,
      recipes: [...state.recipes].sort((a, b) => b.healthScore - a.healthScore),
    };
  }
};
