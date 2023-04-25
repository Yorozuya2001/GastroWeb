/* Componentes de React */
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../customHooks/usePagination";

/* Componentes estilizados */
import {
  StyledButton,
  StyledDiv,
  StyledPaginationContainer,
  StyledPagesContainer,
} from "./Cards-styles";
import NotFound from "../NotFound/NotFound";

const Cards = () => {
  const [
    recipes,
    pageNumbers,
    currentPage,
    setCurrentPage,
    recipesViews,
    handleNext,
    handlePrev,
  ] = usePagination();
  return (
    <>
      <StyledDiv>
        {
          /* Renderizamos las recetas que se veran dependiendo el número de página, si no hay recetas usamos un loader hasta que carguen */

          Array.isArray(recipes) ? (
            recipesViews[0] ? (
              recipesViews.map(({ id, title, image, diets, healthScore }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    diets={diets}
                    healthScore={healthScore}
                  />
                );
              })
            ) : (
              <Loader />
            )
          ) : (
            <NotFound message={recipes} />
          )
        }
      </StyledDiv>
      {/*--------------- Sección de paginación --------------- */}
      <StyledPaginationContainer tablet>
        <StyledButton
          onClick={handlePrev}
          disabled={
            currentPage ===
            pageNumbers[0] /*Desabilitamos el botón si estamos en la primera pagina  */
          }
        >
          Prev
        </StyledButton>
        <StyledPagesContainer tablet>
          {
            /* Renderizamos los botones con números para navegar */
            pageNumbers[0] &&
              pageNumbers.map((number) => (
                <Pagination
                  key={number}
                  number={number}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  disabled={pageNumbers.length === 1 ? true : false}
                />
              ))
          }
        </StyledPagesContainer>
        <StyledButton
          onClick={handleNext}
          disabled={
            currentPage ===
            pageNumbers[
              pageNumbers.length - 1
            ] /*Desabilitamos el botón si estamos en la última página  */
          }
        >
          Next
        </StyledButton>
      </StyledPaginationContainer>
    </>
  );
};

export default Cards;
