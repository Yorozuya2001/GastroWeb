require("dotenv").config();
const axios = require("axios");
const API_URL = require("../../api-url");
const { API_KEY } = process.env;
const { Recipe } = require("../db.js");
const { Op } = require("sequelize");

const searchRecipeByName = async (search) => {
  try {
    if (!search) throw new Error("No se ingreso un valor a buscar");

    const response_API = await axios.get(
      `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${search}`
    );

    const response_DB = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      },
    });

    return {
      apiResults: response_API.data,
      dataBaseResults: response_DB,
    };
  } catch (error) {
    throw new Error(
      `Error al buscar la receta con el nombre ${search}: ${error.message}`
    );
  }
};

module.exports = searchRecipeByName;
