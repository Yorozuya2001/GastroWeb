const imageRegEx =
  /^https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^/#?]+)+\.(?:jpe?g|png|gif|webp)$/i;

const validateRecipe = (req, res, next) => {
  const { name, image, summary, health_score, analyzedInstructions } = req.body;

  console.log("validate ", summary, name);

  let errorMessage = "";

  if (!(name && typeof name === "string"))
    errorMessage = `El nombre ${name} de la receta que creaste es invalido.\n`;

  if (imageRegEx.test(image))
    errorMessage += `La ruta o URL de la ${image} es invalida.\n`;

  if (!(summary && typeof summary === "string"))
    errorMessage += `El nombre ${summary} de la receta que creaste es invalido.\n`;

  if (!(typeof health_score === "number"))
    errorMessage += `La puntuación de salud "${health_score}" de la receta que creaste es invalido.\n`;

  if (!(analyzedInstructions && typeof analyzedInstructions === "string"))
    errorMessage += `Las instrucciones "${instructions}" de la receta que creaste es invalido.\n`;

  if (errorMessage) res.status(400).send(errorMessage);

  next();
};

module.exports = validateRecipe;
