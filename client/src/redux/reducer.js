import {
  GET_RECIPES,
  GET_DIETS,
  SEARCH_RECIPE,
  ORDER_RECIPES,
} from "./actions";

const initialState = {
  recipes: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload],
      };
    case GET_DIETS:
      return {
        ...state,
        diets: [...state.diets, ...action.payload],
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        recipes: [...action.payload],
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
    default:
      return state;
  }
};

export default rootReducer;
