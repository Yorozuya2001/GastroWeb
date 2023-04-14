import React from "react";
import { StyledDiv, StyledInput, StyledButton } from "./SearchBar-styles";

const SearchBar = () => {
  return (
    <StyledDiv>
      <StyledInput type="text" placeholder="Potato and Tomato..." />
      <StyledButton>Search Recipe</StyledButton>
    </StyledDiv>
  );
};

export default SearchBar;
