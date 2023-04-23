/* Componentes estilizados */
import { StyledButton } from "./Pagination-styles";

const Pagination = ({ number, currentPage, setCurrentPage, disabled }) => {
  return (
    <StyledButton
      currentPage={currentPage}
      number={number}
      onClick={() => setCurrentPage(number)} // al hacer click en el botón se seteara el current a ese número de página
      disabled={disabled}
    >
      {number}
    </StyledButton>
  );
};

export default Pagination;
