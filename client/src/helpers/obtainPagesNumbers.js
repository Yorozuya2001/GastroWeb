/*  Calcular y establece el número de páginas necesarias para mostrar todas las recetas, según la cantidad de recetas y la cantidad de cards que se muestran por página. */

export const obtainPagesNumbers = (recipes, setPagesNumbers, cardsPerPage) => {
  let numbers = [];

  let numberOfPages = Math.ceil(recipes.length / cardsPerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    numbers.push(i);
  }

  setPagesNumbers(numbers);
};
