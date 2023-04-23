/* Redux actions */
import {
  GET_RECIPES,
  GET_DIETS,
  SEARCH_RECIPE,
  ORDER_RECIPES,
  FILTER_RECIPES,
  FILTER_RECIPES_BY_DIETS,
  GET_RECIPE_BY_ID,
  CLEAR_DETAIL,
} from "./actions";

/* Redux reducers helpers */
import { clearDetailReducer } from "../helpers/redux-helpers/clearDetailReducer";
import { filterRecipesReducer } from "../helpers/redux-helpers/filterRecipesReducer";
import { getDietsReducer } from "../helpers/redux-helpers/getDietsReducer";
import { getRecipeByIdReducer } from "../helpers/redux-helpers/getRecipeByIdReducer";
import { getRecipesReducer } from "../helpers/redux-helpers/getRecipesReducer";
import { orderRecipesReducer } from "../helpers/redux-helpers/orderRecipesReducer";
import { searchRecipesReducer } from "../helpers/redux-helpers/searchRecipeReducer";
import { filterByDietsReducer } from "../helpers/redux-helpers/filterByDietsReducer";

/* Estado global de redux */
const initialState = {
  recipes: [],
  diets: [],
  allRecipes: [],
  recipesFiltered: [],
  recipeInfo: {},
};

/* Reducer */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return getRecipesReducer(state, action);
    case GET_DIETS:
      return getDietsReducer(state, action);
    case SEARCH_RECIPE:
      return searchRecipesReducer(state, action);
    case ORDER_RECIPES:
      return orderRecipesReducer(state, action);
    case FILTER_RECIPES:
      return filterRecipesReducer(state, action);
    case FILTER_RECIPES_BY_DIETS:
      console.log(action.payload);
      return filterByDietsReducer(state, action);
    case GET_RECIPE_BY_ID:
      return getRecipeByIdReducer(state, action);
    case CLEAR_DETAIL:
      return clearDetailReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
