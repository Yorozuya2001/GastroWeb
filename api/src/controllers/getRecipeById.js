require("dotenv").config();
const axios = require("axios");
const API_URL = require("../../api-url");
const { API_KEY } = process.env;
const { Recipe } = require("../models/Recipe");
const getRecipeById = async (idRecipe) => {
  try {
    const recipe = await Recipe.findOne({ where: { id: idRecipe } });

    if (recipe) {
      console.log("La receta se encuentra en la base de datos");
    } else {
      const response = await axios.get(
        `${API_URL}/recipes/${idRecipe}/information?apiKey=${API_KEY}`
      );

      const { id, title, image, summary, healthScore, instructions } =
        response.data;

      return { id, title, image, summary, healthScore, instructions };
    }
  } catch (error) {
    throw new Error(
      `Error al obtener la receta con id ${idRecipe}: ${error.message}`
    );
  }
};

module.exports = getRecipeById;
