/* establece el rango de recetas que se mostrarán en una página determinada de la aplicación tomando en cuenta el indice inicial y final. en
otras palabras cortamos el array depenediendo en que página nos encontremos. */

export const obtainCardsRange = (
  currentPage,
  cardsPerPage,
  recipes,
  setRecipesViews
) => {
  /* Calculamos el indice de inicio, recordemos que currentPage representa la página en la cual se encuentra el usuario */
  let startIndex = (currentPage - 1) * cardsPerPage;

  /* Calculamos el indice final sumando el indice inicial más la cards por página (que son 8) */
  let endIndex = startIndex + cardsPerPage;

  /* Condicional para evitar que no se muestren las recetas del final si es que sobran, lo que hace es al indice
  final lo igualamos a la longitud del arreglo de receta */
  if (recipes.length < endIndex) {
    endIndex = recipes.length;
  }

  /* Sacamos la porción del array en base  a los calculos hechos. */
  let views = recipes.slice(startIndex, endIndex);

  /* Seteamos el estado */
  setRecipesViews(views);
};

export default obtainCardsRange;
