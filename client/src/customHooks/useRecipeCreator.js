/* Hooks de React */
import { useEffect, useState } from "react";

/* Hooks de React Redux */
import { useSelector } from "react-redux";

/* Helpers */

import enableOrDisabledButton from "../helpers/enabledOrDisabledButton";
import handleChange from "../helpers/handleChangeInRC";
import handleSubmit from "../helpers/submitRecipe";

const useRecipeCreator = () => {
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
    name: "Completa el campo nombre",
    summary: "Completa el campo summary",
    healthScore: "Complete tu puntuacion",
    analyzedInstructions: "Completa las instrucciones",
    image: "Completa la url de las imagenes",
  });

  /* Dependiendo si hay errores o no se seteara el estado que contiene el booleano para habilitar o deshabilitar el botón */
  useEffect(() => {
    enableOrDisabledButton(errors, setBoolean);
  }, [errors]);

  /* handleChange y handleSubmit se ejecutaran por medio de una callback en los manejadores de eventos onChange y
  onSubmit para poder pasarle como párametro el event  */

  return [
    diets,
    myRecipe,
    setMyRecipe,
    boolean,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  ];
};

export default useRecipeCreator;
