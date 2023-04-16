export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const ORDER_RECIPES = "OORDER_RECIPES";

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/recipes");
      const data = await response.json();

      dispatch({
        type: GET_RECIPES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/diets");
      const data = await response.json();
      console.log(data);

      dispatch({
        type: GET_DIETS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchRecipes = (recipe) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:3001/recipes/name?search=${recipe}`
      );
      const data = await response.json();
      console.log(data);

      dispatch({
        type: SEARCH_RECIPE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderBy = (value) => {
  console.log(value);
  return {
    type: ORDER_RECIPES,
    payload: value,
  };
};
