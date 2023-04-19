const validateRecipe = (req, res, next) => {
  const { name, image, summary, healthScore, analyzedInstructions } = req.body;

  console.log(name, image, summary, healthScore, analyzedInstructions);

  let errorMessage = "";

  if (!(name && typeof name === "string"))
    errorMessage = `El nombre ${name} de la receta que creaste es invalido.\n`;

  if (!(summary && typeof summary === "string"))
    errorMessage += `El nombre ${summary} de la receta que creaste es invalido.\n`;

  if (healthScore < 0 || healthScore > 100 || healthScore === "")
    errorMessage += `La puntuación de salud "${healthScore}" de la receta que creaste es invalido.\n`;

  if (!(analyzedInstructions && typeof analyzedInstructions === "string"))
    errorMessage += `Las instrucciones "${analyzedInstructions}" de la receta que creaste es invalido.\n`;

  console.log("Errores Acumulados: ", errorMessage);
  errorMessage ? console.log("tiramos error") : console.log("hacemos next");
  errorMessage ? res.status(400).send(errorMessage) : next();
};

module.exports = validateRecipe;
