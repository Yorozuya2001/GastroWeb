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
  if (!recipe.name) errors.name = "Se requiere un nombre";

  if (recipe.name.length >= 60)
    errors.name = "No puede superar los 60 caracteres";

  if (!recipe.summary) errors.summary = "Se requiere un summary";

  if (
    !(Number(recipe.healthScore) >= 0 && Number(recipe.healthScore) <= 100) ||
    recipe.healthScore === ""
  )
    errors.healthScore = "Puntuación invalida";

  if (!recipe.analyzedInstructions)
    errors.analyzedInstructions = "No se ingresaron instrucciones";

  if (!regexUrl.test(recipe.image))
    errors.image = "No se ingreso una url valida";

  return errors;
};

export default validateRecipe;
