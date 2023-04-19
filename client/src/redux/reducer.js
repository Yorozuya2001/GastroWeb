import {
  GET_RECIPES,
  GET_DIETS,
  SEARCH_RECIPE,
  ORDER_RECIPES,
  FILTER_RECIPES,
  GET_RECIPE_BY_ID,
} from "./actions";

const initialState = {
  recipes: [],
  diets: [],
  allRecipes: [],
  recipeInfo: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload],
        allRecipes: [...state.allRecipes, ...action.payload],
      };
    case GET_DIETS:
      return {
        ...state,
        diets: [...action.payload],
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        recipes: [...action.payload],
        allRecipes: [...action.payload],
      };
    case ORDER_RECIPES:
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
          recipes: [...state.recipes].sort(
            (a, b) => a.healthScore - b.healthScore
          ),
        };
      }

      if (action.payload === "highest-hs-first") {
        return {
          ...state,
          recipes: [...state.recipes].sort(
            (a, b) => b.healthScore - a.healthScore
          ),
        };
      }
      break;
    case FILTER_RECIPES:
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
            ...state.allRecipes.filter(
              (recipe) => typeof recipe.id !== "number"
            ),
          ],
        };
      }
      break;
    case GET_RECIPE_BY_ID:
      return {
        ...state,
        recipeInfo: { ...action.payload },
      };

    default:
      return state;
  }
};

export default rootReducer;
