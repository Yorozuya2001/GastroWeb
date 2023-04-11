require("dotenv").config();
const axios = require("axios");
const API_URL = require("../../api-url");
const { API_KEY } = process.env;

const searchRecipeByName = async (search) => {
  try {
    if (!search) throw new Error("No se ingreso un valor a buscar");

    const response = await axios.get(
      `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${search}`
    );

    return response.data;
  } catch (error) {
    throw new Error(
      `Error al buscar la receta con el nombre ${search}: ${error.message}`
    );
  }
};

module.exports = searchRecipeByName;
