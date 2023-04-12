require("dotenv").config();
const axios = require("axios");
const API_URL = require("../../api-url");
const { API_KEY } = process.env;
const { Recipe } = require("../db.js");
const getRecipeById = async (idRecipe) => {
  try {
    let recipe = undefined;

    const [recipe1, recipe2, recipe3] = await Promise.all([
      Recipe.create({
        name: "Sopa",
        image: "sopa.jpg",
        summary: "La mejor sopa del condado",
        health_score: 21.32,
        instructions: "Hervir agua y sal y añadir los ingredientes",
      }),
      Recipe.create({
        name: "Sopa De verduras",
        image: "sopa.jpg",
        summary: "La mejor sopa del condado",
        health_score: 214.32,
        instructions: "Hervir agua y sal y añadir los ingredientes",
      }),
      Recipe.create({
        name: "Sopa Delicia",
        image: "sopa.jpg",
        summary: "La mejor sopa del condado",
        health_score: 210.32,
        instructions: "Hervir agua y sal y añadir los ingredientes",
      }),
    ]);

    const alldata = await Recipe.findAll();

    if (isNaN(Number(idRecipe))) {
      recipe = await Recipe.findOne({ where: { id: idRecipe } });
    }

    if (recipe) {
      console.log("La receta se encuentra en la base de datos");
      return recipe;
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
