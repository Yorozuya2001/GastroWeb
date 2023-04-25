/* Hooks de React */
import { useState, useEffect } from "react";

/* Hooks de React Redux */
import { useDispatch, useSelector } from "react-redux";

/* Actions de Redux */
import {
  filterBy,
  filterByDiets,
  orderBy,
  searchRecipes,
  getDiets,
} from "../redux/actions";

const useOptions = () => {
  /* Variable de estado donde guardaremos lo que se ingresa por input */
  const [recipeToSearch, setRecipeToSearch] = useState("");

  /* Declaramos dispatch para enviar acciones a los reductores de Redux  */
  const dispatch = useDispatch();

  /* Obtenemos las dietas del estado global de redux, hacemos uso del Hook*/
  const diets = useSelector((state) => state.diets);

  /*Al montar el componente la app despachamos la acción getDiets*/
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  /* setea el estado recipeToSearch*/
  const handleChange = (event) => {
    setRecipeToSearch(event.target.value);
  };

  /* despachamos la acción orderBy que recibe como argumento el orden elegido*/
  const handleChangeOrder = (event) => {
    dispatch(orderBy(event.target.value));
  };

  /* despachamos la acción filterBy que recibe como argumento el valor al cual debemos filtrar*/
  const handleChangeFilter = (event) => {
    dispatch(filterBy(event.target.value));
  };

  const handleChangefilterByDiets = (event) => {
    dispatch(filterByDiets(event.target.value));
  };

  /* despachamos la acción searchRecipes que buscará la recetas que contengan lo que se ingreso por input y prevenimos que se haga refresh, evaluamos, si el input vino vacio entonces no hacemos nada.*/
  const onSearch = (event) => {
    event.preventDefault();
    if (recipeToSearch) {
      dispatch(searchRecipes(recipeToSearch));
    }
  };

  return [
    diets,
    handleChange,
    handleChangeOrder,
    handleChangeFilter,
    handleChangefilterByDiets,
    onSearch,
  ];
};

export default useOptions;
