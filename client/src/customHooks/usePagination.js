/* Hooks de React */
import { useEffect, useState } from "react";
/* Hooks de React Redux */
import { useDispatch, useSelector } from "react-redux";

/* Actions */
import { getRecipes } from "../redux/actions";
import { obtainPagesNumbers } from "../helpers/obtainPagesNumbers";
import obtainCardsRange from "../helpers/obtainCardsRange";

const usePagination = () => {
  const dispatch = useDispatch();
  const cardsPerPage = 8; // Cantidad de Cards que queremos por página

  /* Estado donde guardaremos la cantidad de páginas*/
  const [pagesNumbers, setPagesNumbers] = useState([]);

  /* Página en la que estaremos situados */
  const [currentPage, setCurrentPage] = useState(1);

  /* Arreglo de las recetas que se veran en el componente dependiendo la posición del páginado */
  const [recipesViews, setRecipesViews] = useState([]);
  const recipes = useSelector((state) => state.recipes);

  /* Cada cambio en recipes obtenemos la cantidad de páginas que tendra nuestro páginado */
  useEffect(() => {
    Array.isArray(recipes) &&
      obtainPagesNumbers(recipes, setPagesNumbers, cardsPerPage);
  }, [recipes]);

  /* Cada cambio en recipes y en currentPage obtenemos un arreglo con las cards a mostrar que se guardara en recipesViews */
  useEffect(() => {
    Array.isArray(recipes) &&
      obtainCardsRange(currentPage, cardsPerPage, recipes, setRecipesViews);
  }, [currentPage, recipes]);

  /* Al montarse el componente si no tenemos recetas buscaremos en la API y en nuestra DB  */
  useEffect(() => {
    if (!recipes.length) dispatch(getRecipes());
  }, []);

  /* Nos movemos a la página siguiente  */
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  /* Retrocedemos a la página anterior */
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return [
    recipes,
    pagesNumbers,
    currentPage,
    setCurrentPage,
    recipesViews,
    handleNext,
    handlePrev,
  ];
};

export default usePagination;
