//Variables de entorno
require("dotenv").config();
const API_URL = require("../../api-url");
const { API_KEY } = process.env;

//Base de datos
const { Recipe } = require("../db.js");

//Libreria Axios
const axios = require("axios");

/**************** CONTROLADOR PARA "/recipe" ****************/

const getRecipes = async () => {
  let data_DB = undefined;
  const response_DB = await Recipe.findAll();

  data_DB = response_DB.map((Recipe) => {
    let modifyObj = {
      ...Recipe.dataValues,
      title: Recipe.dataValues.name,
    };
    delete modifyObj.name;
    return modifyObj;
  });

  console.log(data_DB[0]);

  const response = await axios.get(
    `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  let data_API = response.data.results;

  data_API = data_API.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      diets: recipe.diets.join(" - "),
      healthScore: recipe.healthScore,
    };
  });

  return [...data_API, ...data_DB];
};

module.exports = getRecipes;
