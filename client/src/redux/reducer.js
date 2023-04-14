import { GET_RECIPES, GET_DIETS } from "./actions";

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
    default:
      return state;
  }
};

export default rootReducer;