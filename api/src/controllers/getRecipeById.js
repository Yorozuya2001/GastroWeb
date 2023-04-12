//Variables de entorno
require("dotenv").config();
const API_URL = require("../../api-url");
const { API_KEY } = process.env;

//Base de datos
const { Recipe } = require("../db.js");

//Libreria Axios
const axios = require("axios");

/**************** CONTROLADOR PARA "/:idRecipe" ****************/

const getRecipeById = async (idRecipe) => {
  try {
    let recipe = undefined;

    isNaN(Number(idRecipe)) &&
      (recipe = await Recipe.findOne({ where: { id: idRecipe } }));

    if (recipe) return recipe;

    const response = await axios.get(
      `${API_URL}/recipes/${idRecipe}/information?apiKey=${API_KEY}`
    );

    const { id, title, image, summary, healthScore, instructions } =
      response.data;

    return { id, title, image, summary, healthScore, instructions };
  } catch (error) {
    throw new Error(
      `Error al obtener la receta con id ${idRecipe}: ${error.message}`
    );
  }
};

module.exports = getRecipeById;
