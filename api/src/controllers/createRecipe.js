const { Recipe } = require("../db");

const createRecipe = async ({
  name,
  image,
  resume,
  health_score,
  instructions,
}) => {
  const newRecipe = await Recipe.create({
    name,
    image,
    resume,
    health_score,
    instructions,
  });

  return newRecipe;
};

module.exports = createRecipe;
