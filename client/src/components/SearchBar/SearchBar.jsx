/* Componentes estilizados */
import { StyledDiv, StyledInput, StyledButton } from "./SearchBar-styles";

const SearchBar = ({ handleChange }) => {
  return (
    <StyledDiv mobile>
      <StyledInput
        type="text"
        onChange={handleChange}
        placeholder={`There are over a million recipes to look up, type something like "Oreo"...`}
      />
      <StyledButton type="submit">Search Recipe</StyledButton>
    </StyledDiv>
  );
};

export default SearchBar;
