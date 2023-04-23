/* Verificamos si hay errores */

const enableOrDisabledButton = (errors, setBoolean) => {
  let arrOfErrors = Object.values(errors); // Obtenemos un array de las propiedades del objeto errors

  /* Filtramos el array de errores de los string vacíos */
  let arrOfErrorsFiltered = arrOfErrors.filter((error) => error === "");

  /* Si la longitud del array original es la misma que la filtrada significa que no hay errores casi contrarío
  habrá errores en ambos casos seteamos el booleano para habilitar o deshabilitar el botón */

  arrOfErrorsFiltered.length === arrOfErrors.length
    ? setBoolean(false)
    : setBoolean(true);
};

export default enableOrDisabledButton;
