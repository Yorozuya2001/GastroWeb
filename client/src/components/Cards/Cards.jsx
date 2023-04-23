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
} from "./Cards-styles";

const Cards = () => {
  const [
    pageNumbers,
    currentPage,
    setCurrentPage,
    recipesViews,
    handleNext,
    handlePrev,
  ] = usePagination();
  return (
    <>
      {/*--------------- Sección de paginación --------------- */}
      <StyledPaginationContainer>
        <StyledButton
          onClick={handlePrev}
          disabled={
            currentPage ===
            pageNumbers[0] /*Desabilitamos el botón si estamos en la primera pagina  */
          }
        >
          Prev
        </StyledButton>
        <div>
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
        </div>
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
      <StyledDiv>
        {
          /* Renderizamos las recetas que se veran dependiendo el número de página, si no hay recetas usamos un loader hasta que carguen */
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
        }
      </StyledDiv>
    </>
  );
};

export default Cards;
