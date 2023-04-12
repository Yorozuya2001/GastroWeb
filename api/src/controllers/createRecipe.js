const { Recipe, Diets } = require("../db");

const createRecipe = async (props) => {
  const { name, image, summary, health_score, analyzedInstructions, diets } =
    props;

  console.log(diets);

  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    health_score,
    analyzedInstructions,
  });

  // Relacionamos las dietas con la receta creada
  await Promise.all(
    diets.map(async (diet) => {
      const [newDiet, created] = await Diets.findOrCreate({
        where: { name: diet.name },
      });
      await newRecipe.addDiet(newDiet);
    })
  );

  return newRecipe;
};

module.exports = createRecipe;
