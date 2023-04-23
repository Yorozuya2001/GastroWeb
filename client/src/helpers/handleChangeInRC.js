/* Helper para validar */
import validateRecipe from "./validateRecipe";

/* Seteamos nuestro Estado de datos con cada cambio que se haga en cualquier input */

const handleChange = (event, setMyRecipe, myRecipe, setErrors) => {
  const value = event.target.value;
  const name = event.target.name;

  setMyRecipe({ ...myRecipe, [name]: value }); // Seteamos el estado

  /* Seteamos validando */
  setErrors(
    validateRecipe({
      ...myRecipe,
      [event.target.name]: event.target.value,
    })
  );
};

export default handleChange;
