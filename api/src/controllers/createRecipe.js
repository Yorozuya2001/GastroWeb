const { Recipe } = require("../db");

const createRecipe = async (props) => {
  const { name, image, summary, health_score, instructions } = props;

  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    health_score,
    instructions,
  });

  return newRecipe;
};

module.exports = createRecipe;
