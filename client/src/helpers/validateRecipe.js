/* Expresión regular para validar url de imágenes */
const regexUrl =
  /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,}(?:\/[^\/\s]+)*\/(?:[^\/\s]+\.(?:jpg|jpeg|png))$/i;
const validateRecipe = (recipe) => {
  const errors = {
    name: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    image: "",
  };
  if (!recipe.name) errors.name = "Fill in the name field";

  if (recipe.name.length >= 60)
    errors.name = `The "name" field cannot exceed 60 characters`;

  if (!recipe.summary) errors.summary = `Fill in the "summary" field`;

  if (
    !(Number(recipe.healthScore) >= 0 && Number(recipe.healthScore) <= 100) ||
    recipe.healthScore === ""
  )
    errors.healthScore = `the score in the "health score" field is invalid`;

  if (!recipe.analyzedInstructions)
    errors.analyzedInstructions = `No instructions have been entered in the "step" field`;

  if (!regexUrl.test(recipe.image))
    errors.image = `The URL in the "image" field is invalid`;

  return errors;
};

export default validateRecipe;
