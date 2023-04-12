//Variables de entorno
require("dotenv").config();
const { API_KEY } = process.env;

//API URL
const API_URL = require("../../api-url");

//Base de datos
const { Recipe } = require("../db.js");

//Sequelize
const { Op } = require("sequelize");

//Axios
const axios = require("axios");

/**************** CONTROLADOR PARA "/name" ****************/

const searchRecipeByName = async (search) => {
  try {
    if (!search) throw new Error("No se ingreso un valor a buscar");

    const response_API = await axios.get(
      `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${search}&addRecipeInformation=true`
    );

    const response_DB = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      },
    });

    let data_API = response_API.data.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        image: result.image,
        summary: result.summary,
        healthScore: result.healthScore,
        instructions: result.instructions ? result.instructions : null,
      };
    });

    return [...data_API, ...response_DB];
  } catch (error) {
    throw new Error(
      `Error al buscar la receta con el nombre ${search}: ${error.message}`
    );
  }
};

module.exports = searchRecipeByName;
