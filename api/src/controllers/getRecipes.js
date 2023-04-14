//Variables de entorno
require("dotenv").config();
const API_URL = require("../../api-url");
const { API_KEY } = process.env;

//Libreria Axios
const axios = require("axios");

/**************** CONTROLADOR PARA "/recipe" ****************/

const getRecipes = async () => {
  const response = await axios.get(
    `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  let recipes = response.data.results;

  recipes = recipes.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      diets: recipe.diets,
    };
  });

  return recipes;
};

module.exports = getRecipes;
