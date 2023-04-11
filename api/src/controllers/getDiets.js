require("dotenv").config();
const axios = require("axios");
const API_URL = require("../../api-url");
const { API_KEY } = process.env;

const getDiets = async () => {
  const response = await axios.get(
    `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  let getDiets = [];
  const { results } = response.data;

  results.forEach((element) => {
    getDiets = [...getDiets, ...element.diets];
  });

  const setDiets = new Set(getDiets);

  const allDiets = [...setDiets];
  console.log(allDiets);
  return results;
};

module.exports = getDiets;
