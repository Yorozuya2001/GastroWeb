import { StyledDiv, StyledInput, StyledButton } from "./SearchBar-styles";

const SearchBar = ({ handleChange }) => {
  return (
    <StyledDiv>
      <StyledInput
        type="text"
        onChange={handleChange}
        placeholder="Potato and Tomato..."
      />
      <StyledButton type="submit">Search Recipe</StyledButton>
    </StyledDiv>
  );
};

export default SearchBar;
