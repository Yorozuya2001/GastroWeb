import React from "react";
import { StyledButton } from "./Pagination-styles";

const Pagination = ({ number, setCurrentPage, disabled }) => {
  return (
    <StyledButton onClick={() => setCurrentPage(number)} disabled={disabled}>
      {number}
    </StyledButton>
  );
};

export default Pagination;
