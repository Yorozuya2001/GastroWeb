/* Componentes estilizados */
import { StyledButtonNumber } from "./Pagination-styles";

const Pagination = ({ number, currentPage, setCurrentPage, disabled }) => {
  return (
    <StyledButtonNumber
      tablet
      currentPage={currentPage}
      number={number}
      onClick={() => setCurrentPage(number)} // al hacer click en el botón se seteara el current a ese número de página
      disabled={disabled}
    >
      {number}
    </StyledButtonNumber>
  );
};

export default Pagination;
