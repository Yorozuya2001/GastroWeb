const validateRecipe = (req, res, next) => {
  const { name, image, summary, health_score, analyzedInstructions } = req.body;

  console.log("validate ", summary, name);

  let errorMessage = "";

  if (!(name && typeof name === "string"))
    errorMessage = `El nombre ${name} de la receta que creaste es invalido.\n`;

  if (!(summary && typeof summary === "string"))
    errorMessage += `El nombre ${summary} de la receta que creaste es invalido.\n`;

  if (!(typeof health_score === "number"))
    errorMessage += `La puntuación de salud "${health_score}" de la receta que creaste es invalido.\n`;

  if (!(analyzedInstructions && typeof analyzedInstructions === "string"))
    errorMessage += `Las instrucciones "${instructions}" de la receta que creaste es invalido.\n`;

  errorMessage ? res.status(400).send(errorMessage) : next();
};

module.exports = validateRecipe;
