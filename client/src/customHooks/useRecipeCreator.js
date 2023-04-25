/* Hooks de React */
import { useEffect, useState } from "react";

/* Hooks de React Redux */
import { useSelector, useDispatch } from "react-redux";

import { getDiets, getRecipes } from "../redux/actions";

/* Helpers */
import enableOrDisabledButton from "../helpers/enabledOrDisabledButton";
import handleChange from "../helpers/handleChangeInRC";
import handleSubmit from "../helpers/submitRecipe";

const useRecipeCreator = () => {
  /* Declaramos dispatch para enviar acciones a los reductores de Redux  */
  const dispatch = useDispatch();

  /* Nos traemos las dietas del estado global */
  const diets = useSelector((state) => state.diets);
  /* Estado booleano para habilitar o deshabilitar el botón de submit */
  const [boolean, setBoolean] = useState(true);
  /* Estado donde guardaremos los datos ingresados de la receta a enviar a nuestra BD */
  const [myRecipe, setMyRecipe] = useState({
    name: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    image: "",
    diets: [],
  });
  /* Estado que mostrara errores en caso de haberlos, si no los hay será un string vacío "" */
  const [errors, setErrors] = useState({
    name: `Fill in the "named" field`,
    summary: `Fill in the "summary" field`,
    healthScore: `Fill in the "health score" field`,
    analyzedInstructions: `Fill in the "steps" field`,
    image: `Fill in the "image" field`,
  });

  /* Mensaje que mostraremos al enviar nuestro formulario */
  const [message, setMessage] = useState({
    text: "",
    isError: false,
  });

  /* Dependiendo si hay errores o no se seteara el estado que contiene el booleano para habilitar o deshabilitar el botón */
  useEffect(() => {
    enableOrDisabledButton(errors, setBoolean);
  }, [errors]);

  /*Al montar el componente la app despachamos la acción getDiets*/
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  useEffect(() => {
    if (message === "Your recipe has been uploaded successfully.")
      dispatch(getRecipes());
  }, [message]);

  /* handleChange y handleSubmit se ejecutaran por medio de una callback en los manejadores de eventos onChange y
  onSubmit para poder pasarle como párametro el event  */

  return [
    diets,
    myRecipe,
    setMyRecipe,
    boolean,
    errors,
    setErrors,
    message,
    setMessage,
    handleChange,
    handleSubmit,
  ];
};

export default useRecipeCreator;
